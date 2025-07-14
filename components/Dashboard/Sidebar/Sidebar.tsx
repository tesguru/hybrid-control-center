import { IvantageLogo2 } from "@/lib/constants/image";
import { 
  Home, 
  User, 
  ArrowLeftRight, 
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  active?: string;
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
 const router = useRouter();
  const menuItems: MenuItem[] = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: Home, 
      href: '/dashboard',
      active: activePath === '/dashboard'
    },
    { 
      id: 'accounts', 
      label: 'My Accounts', 
      icon: User, 
      href: '/account-page',
      active: activePath === '/accounts'
    },
    { 
      id: 'transfers', 
      label: 'Transfers', 
      icon: ArrowLeftRight, 
      hasSubmenu: true,
      active: activePath?.startsWith('/transfers'),
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
   router.push("/login");
  };

  return (
    <div className="w-64 bg-white h-screen shadow-lg flex flex-col">
   
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div>
            <h2 className="font-semibold text-gray-800">
              <Image src={IvantageLogo2} alt="Logo" />
            </h2>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-800">Olasupo Tunde</p>
          <p className="text-xs text-gray-500">BVN: 39823454</p>
        </div>
      </div>

 
      <nav className="p-4 flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-1">
            {item.href && !item.hasSubmenu ? (
              <Link href={item.href} passHref>
                <div
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                    item.active
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} />
                    <span className="font-semi-bold">{item.label}</span>
                  </div>
                </div>
              </Link>
            ) : (
              <>
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                    item.active
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.hasSubmenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        expandedItems[item.id] ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {item.hasSubmenu && expandedItems[item.id] && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.subItems?.map((subItem) => (
                      <Link key={subItem.id} href={subItem.href} passHref>
                        <div
                          className={`px-4 py-2 rounded-lg text-left transition-colors ${
                            activePath === subItem.href
                              ? 'bg-teal-100 text-teal-700'
                              : 'text-gray-600 hover:bg-gray-50'
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
      </nav>

  
      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};