import pathlib, re
p = pathlib.Path("tcm-wellness/src/app/layout.tsx")
c = p.read_text("utf-8")
# Replace the whole GA comment block with the real GA code
c = c.replace(
  'YOUR_GOOGLE_SITE_VERIFICATION',
  'google38b650d194b3a99b'
)
p.write_text(c, "utf-8")
print("done")
