import { type } from "os";
//  export const BUTTON_TYPE = {
//     SUCCESS: 'SUCCESS',
//     CANCEL: 'CANCEL',
//     NORMAL: 'NOMAL'
//   }
declare module 'react-confirm-alert' {
 
  export interface ReactConfirmAlertProps {
    title?: string
    message?: string
    buttons?: Array<{
      label: string
      type : string
      onClick: () => void
    }>
    childrenElement?: () => React.ReactNode
    customUI?: (customUiOptions: {
    title: string
    message: string
    onClose: () => void
    }) => React.ReactNode
    closeOnClickOutside?: boolean
    closeOnEscape?: boolean
    willUnmount?: () => void
    onClickOutside?: () => void
    onKeypressEscape?: () => void
  }

  export function confirmAlert(options: ReactConfirmAlertProps): void

  export default class ReactConfirmAlert extends React.Component<ReactConfirmAlertProps> {}
}
