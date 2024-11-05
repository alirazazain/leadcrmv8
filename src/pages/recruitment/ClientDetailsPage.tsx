import { useState } from 'react';
import { Mail, Calendar, Copy, Linkedin, ExternalLink, Building2 } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  count?: number;
}

const tabs: TabItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'activities', label: 'Activities' },
  { id: 'jobs', label: 'Jobs', count: 3 },
  { id: 'contacts', label: 'Contacts', count: 2 },
  { id: 'guests', label: 'Guests' },
  { id: 'notes', label: 'Notes' },
  { id: 'files', label: 'Files' },
  { id: 'agreements', label: 'Agreements' },
  { id: 'invoices', label: 'Invoices' }
];

export function ClientDetailsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);

  const handleCopyProfileLink = () => {
    navigator.clipboard.writeText('9848r8hhjrcnfn.jmkmjhxhbch');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Client Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Section - Company Info */}
            <div className="col-span-5 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-semibold text-gray-900">Eleven Dev Private Limited</h1>
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      LABEL
                    </span>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Profile Link:</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">9848r8hhjrcnfn.jmkmjhxhbch</code>
                    <button
                      onClick={handleCopyProfileLink}
                      className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                      title={copied ? 'Copied!' : 'Copy profile link'}
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Setup Meeting
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </button>
              </div>
            </div>

            {/* Right Section - Contact Info */}
            <div className="col-span-7">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-medium text-gray-900">Ali R Zain</h2>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-600">CEO</span>
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      Primary Contact
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">Email Address:</span>
                      <a href="mailto:liam12@gmail.com" className="text-indigo-600 hover:text-indigo-500">
                        liam12@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">Phone:</span>
                      <a href="tel:038884 4888" className="text-gray-900">
                        038884 4888
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">Business Website:</span>
                      <a
                        href="https://www.demowebmark.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-500 inline-flex items-center"
                      >
                        www.demowebmark.com
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">Business Address:</span>
                      <span className="text-gray-900">abc stress#23, House 46, Town Sydney</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">Custom Field:</span>
                      <span className="text-gray-900">This is content for custom field</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-[#0A66C2]/80"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="px-6">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                      activeTab === tab.id
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="h-64 flex items-center justify-center text-gray-500">
          Content for {activeTab} tab will be implemented soon
        </div>
      </div>
    </div>
  );
}