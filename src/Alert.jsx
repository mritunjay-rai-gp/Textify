import React from 'react';

function Alert(props) {
  function capitalize(word) {
    if (!word) return '';
    let ttx = word.toLowerCase();
    return ttx.charAt(0).toUpperCase() + ttx.slice(1);
  }

  if (!props.alert) return null;

  return (
    <div
      className="container my-3"
      style={{ position: "sticky", top: "10px", zIndex: 1000 }}
    >
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;