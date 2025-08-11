"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from 'next/navigation';
import { 
  Users, 
  CreditCard, 
  Settings,
  PieChart,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { IvantageLogo } from "@/lib/constants/image";
import { URLS } from "@/lib/constants/url";

interface MenuItem {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  route?: string;
  exact?: boolean;
  hasDropdown?: boolean;
  children?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  title: string;
  route: string;
}

interface SidebarProps {
  activePath?: string;
}

const navigationItems: MenuItem[] = [
  {
    id: 'overview',
    icon: PieChart,
    title: 'Dashboard Overview',
    route: '/dashboard',
    exact: true
  },
  {
    id: 'users',
    icon: Users,
    title: 'Account Management',
    hasDropdown: true,
    children: [
      {
        id: 'personal-banking',
        title: 'Personal Banking',
        route: URLS.DASHBOARD.PERSONALBANKING
      },
      {
        id: 'corporate-banking',
        title: 'Corporate Banking',
        route: URLS.DASHBOARD.CORPORATEBANKING
      },
      {
        id: 'flagged-accounts',
        title: 'Flagged Accounts',
        route: URLS.DASHBOARD.FLAGGEDACCOUNT
      },
      {
        id: 'pending-approval',
        title: 'Pending Approval',
        route: URLS.DASHBOARD.PENDINGAPPROVALACCOUNT
      },
      {
        id: 'account-on-pnd',
        title: 'Account On Pnd',
        route: URLS.DASHBOARD.ACCOUNTONPND
      }
    ]
  },
  {
    id: 'report',
    icon: CreditCard,
    title: 'Reports',
    hasDropdown: true,
    children: [
      {
        id: 'all-transactions',
        title: 'All Transactions',
        route: URLS.DASHBOARD.ALLTRANSACTIONS
      },
      {
        id: 'bank-transfer-report',
        title: 'Bank Transfer Report',
        route: URLS.DASHBOARD.BANKTRANSFER
      },
      {
        id: 'flagged-transactions-report',
        title: 'Flagged Transactions',
        route: URLS.DASHBOARD.FLAGGEDTRANSACTIONS
      },
      {
        id: 'peronal-banking-transactions',
        title: 'Personal Banking Transactions',
        route: URLS.DASHBOARD.PERSONALBANKINGTRANSACTIONS
      },
      {
        id: 'corporate-banking-transactions',
        title: 'Corporate Banking Transactions',
        route: URLS.DASHBOARD.CORPORATEBANKINGTRANSACTIONS
      }
    ]
  },
  {
    id: 'user-management',
    icon: CreditCard,
    title: 'User management',
    hasDropdown: true,
    children: [
      {
        id: 'View Users',
        title: 'View Users',
        route: '/view-users'
      },
      {
        id: 'create-users',
        title: 'Create Users',
        route: '/create-users'
      },
       {
        id: 'permission-manager',
        title: 'Permission Manager',
        route: '/permission-manager'
      },
    ]
  },
  {
    id: 'logout',
    icon: Settings,
    title: 'Logout',
    route: '/logout',
    exact: true
  }
];

export const Sidebar = ({ activePath }: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  // const router = useRouter();

  // Function to check if a route is active
  const isRouteActive = (route: string, exact: boolean = false): boolean => {
    if (!activePath) return false;
    
    if (exact) {
      return activePath === route;
    }
    return activePath.startsWith(route);
  };

  // Function to find active navigation item and child
  const findActiveNavigation = () => {
    let foundActiveItem: string | null = null;
    let foundActiveChild: string | null = null;
    let shouldOpenDropdown: string | null = null;

    navigationItems.forEach(item => {
      if (item.route && isRouteActive(item.route, item.exact)) {
        foundActiveItem = item.id;
      } else if (item.children) {
        const activeChild = item.children.find(child => 
          isRouteActive(child.route)
        );
        
        if (activeChild) {
          foundActiveItem = item.id;
          foundActiveChild = activeChild.id;
          shouldOpenDropdown = item.id;
        }
      }
    });

    return { foundActiveItem, foundActiveChild, shouldOpenDropdown };
  };

  // Update active states when route changes
  useEffect(() => {
    const { foundActiveItem, foundActiveChild, shouldOpenDropdown } = findActiveNavigation();
    
    setActiveItem(foundActiveItem);
    setActiveChild(foundActiveChild);
    
    // Auto-open dropdown if a child is active
    if (shouldOpenDropdown) {
      setDropdownOpen(shouldOpenDropdown);
    }
  }, [activePath]);

  const toggleDropdown = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const renderNavigationItem = (item: MenuItem) => {
    const isMainActive = activeItem === item.id && !activeChild;
    const hasActiveChild = activeItem === item.id && activeChild;
    const isDropdownOpen = dropdownOpen === item.id;

    if (!item.hasDropdown && item.route) {
      return (
        <Link key={item.id} href={item.route}>
          <button
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
              isMainActive
                ? 'bg-primary-01 text-white shadow-lg'
                : 'text-gray-900 hover:bg-gray-100 hover:text-primary-01'
            }`}
            title={!sidebarOpen ? item.title : ''}
          >
            <div className="flex items-center min-w-0">
              <div className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} flex-shrink-0`}>
                <item.icon 
                  size={20} 
                  {...(item.icon.prototype && item.icon.prototype.constructor.name !== 'Function' ? {
                    className: isMainActive ? 'text-white' : 'text-gray-600 group-hover:text-primary-01'
                  } : {})}
                />
              </div>
              {sidebarOpen && (
                <span className={`font-medium truncate ${
                  isMainActive ? 'text-white' : 'text-gray-900 group-hover:text-primary-01'
                }`}>
                  {item.title}
                </span>
              )}
            </div>
          </button>
        </Link>
      );
    }

    return (
      <div key={item.id} className="mb-1">
        <button
          onClick={() => toggleDropdown(item.id)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
            isMainActive || hasActiveChild
              ? 'bg-primary-01 text-white shadow-lg'
              : 'text-gray-900 hover:bg-gray-100 hover:text-primary-01'
          }`}
          title={!sidebarOpen ? item.title : ''}
        >
          <div className="flex items-center min-w-0">
            <div className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} flex-shrink-0`}>
              <item.icon 
                size={20}
                {...(item.icon.prototype && item.icon.prototype.constructor.name !== 'Function' ? {
                  className: isMainActive || hasActiveChild ? 'text-white' : 'text-gray-600 group-hover:text-primary-01'
                } : {})}
              />
            </div>
            {sidebarOpen && (
              <span className={`font-medium truncate ${
                isMainActive || hasActiveChild ? 'text-white' : 'text-gray-900 group-hover:text-primary-01'
              }`}>
                {item.title}
              </span>
            )}
          </div>
          
          {item.hasDropdown && sidebarOpen && (
            <div className="flex-shrink-0">
              <ChevronDown
                size={16}
                {...(ChevronDown.prototype && ChevronDown.prototype.constructor.name !== 'Function' ? {
                  className: `transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  } ${
                    isMainActive || hasActiveChild ? 'text-white' : 'text-gray-600 group-hover:text-primary-01'
                  }`
                } : {})}
              />
            </div>
          )}
        </button>

        {/* Dropdown Content */}
        {item.hasDropdown && isDropdownOpen && sidebarOpen && (
          <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
            {item.children?.map((child) => (
              <Link key={child.id} href={child.route}>
                <div 
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeChild === child.id 
                      ? 'bg-primary-01/20 text-primary-01 font-medium border-l-2 border-primary-01' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                  }`}
                >
                  {child.title}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Tooltip for collapsed sidebar */}
        {!sidebarOpen && item.hasDropdown && (
          <div className="absolute left-16 top-0 invisible group-hover:visible bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap z-50">
            {item.title}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-white transition-all duration-300 z-50 shadow-xl ${
      sidebarOpen ? 'w-64' : 'w-16'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {sidebarOpen && (
          <Link href="/dashboard" className="flex items-center h-10 w-40">
            <Image className='mt-4' alt='Ivantage Logo' src={IvantageLogo} />
          </Link>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-primary-01 text-white hover:bg-primary-01/80 transition-colors"
        >
          {sidebarOpen ? (
            <div><X size={20} /></div>
          ) : (
            <div><Menu size={20} /></div>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigationItems.map(renderNavigationItem)}
      </nav>

      {/* Active Route Indicator (Optional) */}
      {sidebarOpen && (
        <div className="absolute bottom-4 left-4 right-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-500">
          <div className="font-medium">Current: {activePath}</div>
          {activeItem && (
            <div className="mt-1">
              Active: {navigationItems.find(item => item.id === activeItem)?.title}
              {activeChild && ` → ${navigationItems
                .find(item => item.id === activeItem)?.children
                ?.find((child) => child.id === activeChild)?.title}`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};