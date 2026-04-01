import { Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-white">Direct Amelia</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              The AI Director of Aviation that runs your entire flight department.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-white mb-3">Platform</p>
            <ul className="space-y-2">
              <li><a href="#platform" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Operations Center</a></li>
              <li><a href="#platform" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Crew Scheduling</a></li>
              <li><a href="#platform" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Fleet Management</a></li>
              <li><a href="#platform" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Safety & Compliance</a></li>
              <li><a href="#agents" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">AI Agents</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white mb-3">Solutions</p>
            <ul className="space-y-2">
              <li><a href="#part-91" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Part 91 Flight Departments</a></li>
              <li><a href="#part-135" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Part 135 Charter Operators</a></li>
              <li><a href="#pricing" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Book a Demo</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white mb-3">Contact</p>
            <ul className="space-y-2">
              <li><a href="mailto:matt@directamelia.com" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">matt@directamelia.com</a></li>
              <li><a href="https://app.directamelia.com" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Sign In to App</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Direct Amelia. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
