import React from "react";
import ServicesModalContent from "./services-modal-content";
import { ServicesModal } from "./services-modal";
const ServiceModal = ({ className, href }) => {
  return (
    <ServicesModal className={className} href={href}>
      <ServicesModalContent />
    </ServicesModal>
  );
};

export default ServiceModal;
