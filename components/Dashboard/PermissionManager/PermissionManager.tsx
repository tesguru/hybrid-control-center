import { useState } from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import { URLS } from '@/lib/constants/url';

interface Permission {
  view: boolean;
  edit: boolean;
  delete: boolean;
}

interface Permissions {
  [role: string]: {
    [module: string]: Permission;
  };
}

const PermissionsManager = () => {
  const [selectedRole, setSelectedRole] = useState<string>('admin');
  const [permissions, setPermissions] = useState<Permissions>({
    admin: {
      dashboard: { view: true, edit: true, delete: true },
      users: { view: true, edit: true, delete: true },
      settings: { view: true, edit: true, delete: true },
      reports: { view: true, edit: true, delete: true },
    },
    editor: {
      dashboard: { view: true, edit: true, delete: false },
      users: { view: true, edit: false, delete: false },
      settings: { view: false, edit: false, delete: false },
      reports: { view: true, edit: true, delete: false },
    },
    viewer: {
      dashboard: { view: true, edit: false, delete: false },
      users: { view: true, edit: false, delete: false },
      settings: { view: false, edit: false, delete: false },
      reports: { view: true, edit: false, delete: false },
    },
  });

  const [newRoleName, setNewRoleName] = useState<string>('');
  const [isAddingRole, setIsAddingRole] = useState<boolean>(false);

  const handlePermissionChange = (module: string, permission: keyof Permission, value: boolean) => {
    setPermissions(prev => ({
      ...prev,
      [selectedRole]: {
        ...prev[selectedRole],
        [module]: {
          ...prev[selectedRole][module],
          [permission]: value,
        },
      },
    }));
  };

  const handleAddRole = () => {
    if (newRoleName.trim() && !permissions[newRoleName.toLowerCase()]) {
      const roleKey = newRoleName.toLowerCase();
      setPermissions(prev => ({
        ...prev,
        [roleKey]: Object.keys(prev.admin).reduce((acc, module) => {
          acc[module] = { view: false, edit: false, delete: false };
          return acc;
        }, {} as Record<string, Permission>)
      }));
      setSelectedRole(roleKey);
      setNewRoleName('');
      setIsAddingRole(false);
    }
  };

  const handleDeleteRole = (role: string) => {
    if (role === 'admin') return;
    
    const { [role]: _, ...remainingRoles } = permissions;
    setPermissions(remainingRoles);
    setSelectedRole('admin');
  };

  const handleResetChanges = () => {
    console.log('Reset changes');
  };

  const handleSavePermissions = () => {

    console.log('Saving permissions:', permissions);

  };

  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERMISSIONMANAGER}>
      <div className="m-4 mx-auto p-6 rounded-lg shadow-md bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Role Permissions Manager</h1>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-teal-700">Roles</h2>
            {!isAddingRole ? (
              <button 
                onClick={() => setIsAddingRole(true)}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
              >
                + Add New Role
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="New role name"
                  className="px-3 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  value={newRoleName}
                  onChange={(e) => setNewRoleName(e.target.value)}
                />
                <button 
                  onClick={handleAddRole}
                  className="px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
                >
                  Save
                </button>
                <button 
                  onClick={() => setIsAddingRole(false)}
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {Object.keys(permissions).map((role) => (
              <div key={role} className="relative group">
                <button
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    selectedRole === role 
                      ? 'bg-teal-600 text-white' 
                      : 'bg-teal-100 text-teal-800 hover:bg-teal-200'
                  }`}
                >
                  {role}
                </button>
                {role !== 'admin' && (
                  <button
                    onClick={() => handleDeleteRole(role)}
                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs transition-opacity"
                    title="Delete role"
                    aria-label={`Delete ${role} role`}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>


        <div className="mb-6">
          <h2 className="text-lg font-semibold text-teal-700 mb-4">
            Permissions for <span className="capitalize">{selectedRole}</span> role
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-teal-200">
              <thead className="bg-teal-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">
                    Module
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">
                    View
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">
                    Edit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-teal-200">
                {Object.entries(permissions[selectedRole]).map(([module, perms]) => (
                  <tr key={module}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                      {module}
                    </td>
                    {(Object.keys(perms) as Array<keyof Permission>).map((permission) => (
                      <td key={permission} className="px-6 py-4 whitespace-nowrap">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-teal-600 rounded focus:ring-teal-500"
                            checked={perms[permission]}
                            onChange={(e) => handlePermissionChange(module, permission, e.target.checked)}
                            aria-label={`${module} ${permission} permission`}
                          />
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button 
            onClick={handleResetChanges}
            className="px-4 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
          >
            Reset Changes
          </button>
          <button 
            onClick={handleSavePermissions}
            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Save Permissions
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PermissionsManager;