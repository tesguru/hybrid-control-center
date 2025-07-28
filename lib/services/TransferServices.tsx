
import { apiClient } from '../../app/api/utils/axios';
import { TransferDetailsForm } from '../schemas/transferschema';



export const TransferService = {
  transfertowonaccount: (data: TransferDetailsForm) => apiClient.post('transfer', data),
 
};