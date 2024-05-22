/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import * as React from "react";
import { Modal } from 'office-ui-fabric-react';

interface PropsModal {
  open: boolean;
  setOpen: (value: boolean | ((prevOpen: boolean) => boolean)) => void;
}
export const OpenModal = ({open, setOpen}: PropsModal) => {
  return (
    <Modal  isOpen={open}>
        <div>
            <span >Lorem Ipsum</span>
            <span onClick={() => setOpen(false)}>close</span>
        </div>
        <div>
            <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    </Modal>
  );
};