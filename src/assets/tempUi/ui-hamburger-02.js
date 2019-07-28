module.exports = `
.ui-hamburger-02 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #2980b9, #2980b9);
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.2s 0.25s ease;
  cursor: pointer;
}
.ui-hamburger-02:before,
.ui-hamburger-02:after {
  height: 20%;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #2980b9;
  content: '';
  transition: transform 0.3s ease;
}
.ui-hamburger-02:before {
  top: 0;
  transform-origin: 91% 150%;
}
.ui-hamburger-02:after {
  bottom: 0;
  transform-origin: 91% -50%;
}
.ui-hamburger-02.is-active {
  background-size: 0 20%;
  transition-delay: 0s;
}
.ui-hamburger-02.is-active:before {
  transform: rotate(-45deg);
  transition-delay: 0.15s;
}
.ui-hamburger-02.is-active:after {
  transform: rotate(45deg);
  transition-delay: 0.15s;
}

`
