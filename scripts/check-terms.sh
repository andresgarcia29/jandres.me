#!/usr/bin/env bash
# Confidentiality gate. Usage: check-terms.sh <paths...>
# Fails on any term in forbidden-terms.txt (case-insensitive), any email other than the public one,
# or a forbidden term anywhere in git history (messages and diffs).
set -uo pipefail
cd "$(dirname "$0")/.."
TERMS=scripts/forbidden-terms.txt
ALLOWED_EMAIL='jose\.andres\.gm29@gmail\.com|@jandres\.me|noreply|github-actions'
EMAIL='[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}'

paths=()
for p in "$@"; do [ -e "$p" ] && paths+=("$p"); done
[ ${#paths[@]} -gt 0 ] || { echo "::error::no paths to check: $*"; exit 1; }
status=0

hits=$(grep -rnIiE -f "$TERMS" --exclude=forbidden-terms.txt "${paths[@]}")
[ $? -le 1 ] || { echo "::error::grep failed"; exit 1; }
[ -n "$hits" ] && { echo "$hits"; echo "::error::forbidden term found"; status=1; }

emails=$(grep -rhoIE "$EMAIL" --exclude=forbidden-terms.txt "${paths[@]}" | grep -vE "$ALLOWED_EMAIL" | sort -u)
[ -n "$emails" ] && { echo "$emails"; echo "::error::non-allowlisted email found"; status=1; }

pdfs=$(find "${paths[@]}" -name '*.pdf' 2>/dev/null)
if [ -n "$pdfs" ]; then
  command -v pdftotext >/dev/null || { echo "::error::pdftotext needed to check PDFs (poppler-utils)"; exit 1; }
  for f in $pdfs; do
    pdf_hits=$(pdftotext "$f" - | grep -niE -f "$TERMS")
    [ -n "$pdf_hits" ] && { echo "$f: $pdf_hits"; echo "::error::forbidden term in PDF"; status=1; }
  done
fi

if git rev-parse --git-dir >/dev/null 2>&1 && git rev-parse HEAD >/dev/null 2>&1; then
  history=$(git log --all -p --format='%an %ae%n%B' -- . ':!scripts/forbidden-terms.txt' | grep -nIiE -f "$TERMS" | head)
  [ -n "$history" ] && { echo "$history"; echo "::error::forbidden term in git history"; status=1; }
fi

[ "$status" = 0 ] && echo "confidentiality gate: clean (${paths[*]})"
exit "$status"
