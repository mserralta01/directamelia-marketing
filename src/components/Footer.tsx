export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white">Direct Amelia</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="mailto:matt@directamelia.com" className="hover:text-slate-300 transition-colors">Contact</a>
            <a href="https://app.directamelia.com" className="hover:text-slate-300 transition-colors">App</a>
          </div>

          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Direct Amelia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
