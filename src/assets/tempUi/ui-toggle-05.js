module.exports = `
.ui-toggle-05 {
  padding: 15px 25px;
  color: #2980b9;
  cursor: pointer;
  border: solid 1px #2980b9;
  font-size: 16px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: color 0.3s ease;
}
.ui-toggle-05:before,
.ui-toggle-05:after {
  position: absolute;
  content: '';
  background-color: #2980b9;
  width: 50%;
  top: 0;
  height: 100%;
  transition: transform 0.3s ease;
  z-index: -1;
}
.ui-toggle-05:before {
  left: 0;
  transform: translateX(-100%);
}
.ui-toggle-05:after {
  right: 0;
  transform: translateX(100%);
}
.ui-toggle-05.is-active {
  color: #fff;
}
.ui-toggle-05.is-active:before,
.ui-toggle-05.is-active:after {
  transform: translateX(0);
}

`
