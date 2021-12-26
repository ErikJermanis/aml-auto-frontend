import Swal from "sweetalert2";

export const ErrorToast = Swal.mixin({
  toast: true,
  position: "top-end",
  iconColor: "white",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  customClass: {
    popup: "colored-toast",
  },
  icon: "error"
})