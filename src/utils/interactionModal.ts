import { customColor } from 'src/constants';
import Swal, { SweetAlertIcon } from 'sweetalert2';

/**
 *
 * @param title 모달 제목
 * @param fn yes 버튼 눌렀을때 실행할 함수
 * @param yesText yesButton Text
 * @param noText noButton Text
 * @param text 제목밑에 부연설명 text
 */
export const checkModal = async (
  title: string,
  fn?: () => void,
  yesText = '예',
  noText = '아니오',
  text?: string,
) => {
  const result = await Swal.fire({
    title,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: customColor.blue,
    cancelButtonColor: customColor.danger,
    confirmButtonText: yesText,
    cancelButtonText: noText,
    text,
  });
  if (result.isConfirmed) {
    fn?.();
    return true;
  }
  return false;
};

/**
 *
 * @param title 모달제목
 * @param iconType 아이콘타입
 * @param text 제목밑에 부연설명 text
 */
export const infoModal = async (
  title: string,
  iconType: SweetAlertIcon,
  text?: string,
  fn?: () => void,
) => {
  await Swal.fire({
    title,
    text,
    icon: iconType,
  });
  fn?.();
};

export const errorModal = async (
  title: string,
  text?: string,
  fn?: () => void,
) => {
  await Swal.fire({
    title,
    text,
    icon: 'error',
    // timer: 2000,
    // showConfirmButton: false,
  });
  fn?.();
};
