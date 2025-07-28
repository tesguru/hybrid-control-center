import { useMutation } from '@tanstack/react-query';
import { handleApiError } from '@/app/api/utils/handleapierror';
import { useToast } from '@/lib/hooks/UI/usetoast';
import { TransferService } from '@/lib/services/TransferServices';

export const useTransfer = () => {
  const { toast } = useToast();

  const transferToOwnAccount = useMutation({
    mutationFn: TransferService.transfertowonaccount,
    onError: (error: any) => {
      handleApiError(error, "Transfer", toast);
    },
  });

  return { transferToOwnAccount };
};
