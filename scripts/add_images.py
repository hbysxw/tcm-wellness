import pathlib

# 1. Tongue intro
p1 = pathlib.Path('tcm-wellness/src/content/diagnosis/tongue-introduction.md')
c = p1.read_text('utf-8')
c = c.replace('tongue diagnosis reference chart','tongue diagnosis reference chart')
print('ok')
