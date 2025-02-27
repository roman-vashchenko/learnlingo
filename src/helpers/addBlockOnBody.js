export const addBlockOnBody = (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.body.removeAttribute("style");
  }
};
