import React, { useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

export function ToastProvider({ children }) {
  return <>{children}</>;
}

export function ToastViewport() {
  return null;
}

export function ToastComponent({ open, onOpenChange, title, description, variant = "default" }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open, onOpenChange]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => onOpenChange(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={() => onOpenChange(false)}
        severity={variant === 'success' ? 'success' : 'info'}
        sx={{ minWidth: '300px' }}
      >
        {title}
        {description && <div>{description}</div>}
      </Alert>
    </Snackbar>
  );
}
