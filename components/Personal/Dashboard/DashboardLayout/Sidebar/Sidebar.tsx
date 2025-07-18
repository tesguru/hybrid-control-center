"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { 
  Home, 
  User, 
  ArrowLeftRight, 
  LogOut,
  ChevronDown,
  BarChart3,
  Settings,
  Menu,
  X
} from "lucide-react";
import { IvantageLogo2 } from "@/lib/constants/image";
import { URLS } from "@/lib/constants/url";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  active?: boolean;
  hasSubmenu?: boolean;
  href?: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
  href: string;
}

interface SidebarProps {
  activePath?: string;
}

export const Sidebar = ({ activePath }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  // Auto-expand parent if any submenu item is active (but don't force parent active state)
  useEffect(() => {
    const newExpandedItems: Record<string, boolean> = {};
    
    menuItems.forEach(item => {
      if (item.hasSubmenu && item.subItems) {
        const hasActiveSubItem = item.subItems.some(subItem => 
          activePath === subItem.href || activePath?.startsWith(subItem.href)
        );
        
        if (hasActiveSubItem) {
          newExpandedItems[item.id] = true;
        }
      }
    });
    
    setExpandedItems(prev => ({ ...prev, ...newExpandedItems }));
  }, [activePath]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('mobile-menu-button');
      
      if (isMobileOpen && sidebar && !sidebar.contains(event.target as Node) && 
          menuButton && !menuButton.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  const menuItems: MenuItem[] = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: Home, 
      href: URLS.DASHBOARD.PERSONAL.DASHBOARD,
      active: activePath === URLS.DASHBOARD.PERSONAL.DASHBOARD
    },
    { 
      id: 'accounts', 
      label: 'My Accounts', 
      icon: User, 
      href: URLS.DASHBOARD.PERSONAL.MYACCOUNT,
      active: activePath === URLS.DASHBOARD.PERSONAL.MYACCOUNT
    },
    { 
      id: 'transfer', 
      label: 'Transfers', 
      icon: BarChart3, 
      hasSubmenu: true,
      active: false,
      subItems: [
        { id: 'transaction-to-own-account', label: 'Transaction To Own Account', href: URLS.DASHBOARD.PERSONAL.TRANSFERTOOWNACCOUNT },
        { id: 'transfer-to-other-ivantage-account', label: 'Transaction To Other Ivantage Account', href: URLS.DASHBOARD.PERSONAL.TRANSFERTOIVANTAGEACCOUNT },
        { id: 'transfer-to-other-banks', label: 'Transfer To Other Banks', href: URLS.DASHBOARD.PERSONAL.TRANSFERTOOTHERBANKS },
        { id: 'manage-beneficiary', label: 'Manage Beneficiary', href: URLS.DASHBOARD.PERSONAL.MANAGEBENEFICIARY },
      ]
    },
     { 
      id: 'transfer-history', 
      label: 'Transaction History', 
      icon: User, 
      href: URLS.DASHBOARD.PERSONAL.TRANSACTIONHISTORY,
      active: activePath === URLS.DASHBOARD.PERSONAL.TRANSACTIONHISTORY
    },
    { 
      id: 'bank-statement', 
      label: 'Bank Statement', 
      icon: User, 
      href: URLS.DASHBOARD.PERSONAL.BANKSTATEMENT,
      active: activePath === URLS.DASHBOARD.PERSONAL.BANKSTATEMENT
    },
    { 
      id: 'bill-payment', 
      label: 'Bill Payment', 
      icon: Settings, 
      hasSubmenu: true,
      active: false, 
      subItems: [
        { id: 'bill-payment-airtime', label: 'Airtime Purchase', href: URLS.DASHBOARD.PERSONAL.BILLPAYMENTAIRTIME },
        { id: 'bill-payment-utility', label: 'Utility Payment', href: URLS.DASHBOARD.PERSONAL.BILLPAYMENTUTILITIES }
      ]
    },
    { 
      id: 'transfers', 
      label: 'Transfers', 
      icon: ArrowLeftRight, 
      hasSubmenu: true,
      active: false, 
      subItems: [
        { id: 'internal', label: 'Internal Transfer', href: '/transfers/internal' },
        { id: 'external', label: 'External Transfer', href: '/transfers/external' },
        { id: 'international', label: 'International Transfer', href: '/transfers/international' },
      ]
    },
  ];

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleLogout = () => {
    router.push(URLS.AUTH.PERSONAL.LOGIN);
  };

  return (
    <>
  
      <button
        id="mobile-menu-button"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

 
      <div
        id="sidebar"
        className={`
          fixed md:relative z-40 w-64 bg-white h-screen shadow-lg flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
      
        <div className="p-6 border-b border-gray-100 flex">
          <div className="flex items-center mb-4">
            <Image 
              src={IvantageLogo2} 
              alt="Ivantage Logo" 
              width={120}
              height={40}
              priority
            />
          </div>
          <div className="text-right w-1/2">
            <p className="text-sm font-bold text-gray-800">Reviewer</p>
            <p className="text-sm font-bold text-gray-800">Magnus Limited</p>
            <p className="text-xs text-gray-500">BVN: 39823454</p>
          </div>
        </div>

       
        <nav className="p-4 flex-1 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.href && !item.hasSubmenu ? (
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMobileOpen(false)}
                    passHref
                  >
                    <div
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        item.active
                          ? 'bg-primary-01 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        item.active
                          ? 'bg-primary-01 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      aria-expanded={expandedItems[item.id]}
                      aria-controls={`submenu-${item.id}`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.hasSubmenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            expandedItems[item.id] ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {item.hasSubmenu && expandedItems[item.id] && (
                      <div 
                        id={`submenu-${item.id}`}
                        className="ml-6 mt-2 space-y-1"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.subItems?.map((subItem) => (
                          <Link 
                            key={subItem.id} 
                            href={subItem.href}
                            onClick={() => setIsMobileOpen(false)}
                            passHref
                          >
                            <div
                              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                                activePath === subItem.href || activePath?.startsWith(subItem.href)
                                  ? 'bg-primary-03 text-black font-medium'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                            >
                              {subItem.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all duration-200"
            aria-label="Logout"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};