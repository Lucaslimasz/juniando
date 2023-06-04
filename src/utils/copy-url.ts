import { toast } from "react-toastify";

export const shareLinkPost = () => {
  navigator.clipboard.writeText(window.location.href);
  toast.success("Copiado! :D Agora Compartilhe com a galera");
};
