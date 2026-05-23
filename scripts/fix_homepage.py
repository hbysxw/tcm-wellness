import pathlib
p = pathlib.Path("tcm-wellness/src/app/page.tsx")
c = p.read_text("utf-8")

# Fix hero section
old_hero = '<section className="bg-gradient-to-b from-primary-light to-bg-warm py-20 px-4">' + "\n" + '        <div className="max-w-4xl mx-auto text-center">'

new_hero = '<section className="relative py-20 px-4 overflow-hidden">' + "\n" + '        <div className="absolute inset-0">'
new_hero += '<img src="/images/nature-medicine.jpg" alt="" className="w-full h-full object-cover opacity-15" />' + "</div>"
new_hero += "\n" + '        <div className="absolute inset-0 bg-gradient-to-b from-primary-light/80 to-bg-warm/90" />'
new_hero += "\n" + '        <div className="max-w-4xl mx-auto text-center relative z-10">'

c = c.replace(old_hero, new_hero)

# Fix CTA section
old_cta = '<section className="bg-primary py-16 px-4">' + "\n" + '        <div className="max-w-3xl mx-auto text-center">'

new_cta = '<section className="relative py-16 px-4 overflow-hidden">' + "\n" + '        <div className="absolute inset-0">'
new_cta += '<img src="/images/yoga-meditation.jpg" alt="" className="w-full h-full object-cover opacity-20" />' + "</div>"
new_cta += "\n" + '        <div className="absolute inset-0 bg-primary/95" />'
new_cta += "\n" + '        <div className="max-w-3xl mx-auto text-center relative z-10">'

c = c.replace(old_cta, new_cta)

p.write_text(c, "utf-8")
print("Done")
