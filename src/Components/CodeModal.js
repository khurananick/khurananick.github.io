import {
  SideModal,
  SideModalContainer,
  SideModalHeader,
  SideModalHeading,
  SideModalBody } from '@twilio-paste/core/side-modal';
import { CodeBlock } from '@twilio-paste/core/code-block';

const CodeModal = ({ dialog, code }) => {
  return (
      <SideModalContainer state={dialog}>
        <SideModal aria-label="Sample Code Modal" data-testid="dialog">
          <SideModalHeader>
            <SideModalHeading></SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <CodeBlock
              data-testid="dialog-content"
              variant="single-line"
              language='javascript'
              code={code}
            />
          </SideModalBody>
        </SideModal>
      </SideModalContainer>
  )
}

export default CodeModal;