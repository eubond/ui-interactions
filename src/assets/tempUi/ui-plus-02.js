module.exports = `
.ui-plus-02 {
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
}
.ui-plus-02:before,
.ui-plus-02:after {
  content: "";
  height: 20%;
  width: 100%;
  background-color: #2980b9;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10%;
}
.ui-plus-02:before {
  transform: rotate(90deg);
}
.ui-plus-02:before {
  transition: transform 0.3s ease;
}
.ui-plus-02.is-active:before {
  transform: rotate(-180deg);
}

`
