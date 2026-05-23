import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">☯</span>
              <span className="font-serif text-lg font-bold text-primary">TCM Wellness</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Bridging ancient wisdom and modern understanding. Your trusted guide to Traditional Chinese Medicine.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-text-body mb-3">Explore</h3>
            <div className="flex flex-col gap-2">
              <Link href="/category/about" className="text-sm text-text-muted hover:text-primary transition-colors">What Is TCM</Link>
              <Link href="/category/body" className="text-sm text-text-muted hover:text-primary transition-colors">Your Body</Link>
              <Link href="/category/diagnosis" className="text-sm text-text-muted hover:text-primary transition-colors">Diagnosis</Link>
              <Link href="/category/conditions" className="text-sm text-text-muted hover:text-primary transition-colors">Conditions</Link>
              <Link href="/category/food" className="text-sm text-text-muted hover:text-primary transition-colors">Food as Medicine</Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-text-body mb-3">Disclaimer</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              The content on this website is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 text-center">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} TCM Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
