import checkNumInputs from './checkNumInputs';

const changeModalState = state => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElems(event, elem, property) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        if (elem.length > 1) {
          state[property] = i;
        } else {
          state[property] = item.value;
        }

        console.log(state);
      });
    });
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
};

export default changeModalState;
