import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Vehicles</h4>
            <ul className="space-y-3">
              {["Model S", "Model 3", "Model X", "Model Y", "Roadster"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Energy</h4>
            <ul className="space-y-3">
              {["Solar Roof", "Solar Panels", "Powerwall", "Megapack"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Investor Relations", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              {["Support Center", "Vehicle Recalls", "Schedule Service", "Find Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Aura Motors. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {["Privacy & Legal", "Vehicle Recalls", "Contact", "News", "Get Updates", "Locations"].map((item) => (
              <Link key={item} href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
