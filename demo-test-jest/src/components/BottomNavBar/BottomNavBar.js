import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AccessibleForward from "@mui/icons-material/AccessibleForward";
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const MuiBottomNavigationAction = styled(BottomNavigationAction)(`
  color: white;
  &.Mui-selected {
    color: red;
  }
`);

const BottomNavBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: "rgb(0 0 0 / 18%)",
          color: (theme) => theme.palette.text.secondary,
          "& .Mui-selected": {
            "& .MuiBottomNavigationAction-label": {
              fontSize: (theme) => theme.typography.caption,
              transition: "none",
              fontWeight: "bold",
              lineHeight: "20px",
            },
            "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
              color: "#6e72ff",
            },
          },
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <MuiBottomNavigationAction
          label="Table"
          value={"Table"}
          icon={<AccessibleForward />}
          onClick={() => {
            navigate("/EnhancedTable");
          }}
        />
        <MuiBottomNavigationAction
          label="Login"
          value={"Login"}
          icon={<AccessibleForward />}
          onClick={() => {
            navigate("/Login");
          }}
        />
        <MuiBottomNavigationAction
          label="Nearby"
          value={"Nearby"}
          icon={<AccessibleForward />}
          onClick={() => {
            navigate("/Nothing");
          }}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNavBar;
