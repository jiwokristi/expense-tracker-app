import { useState } from "react";

import {
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Icon,
  InputAdornment,
  styled,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Icon {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ExpensesFilter({ selected, onFilterChange }) {
  const theme = useTheme();

  const [expand, setExpand] = useState(false);

  const dropdownChangeHandler = (event) => onFilterChange(event.target.value);

  const expandHandler = () => setExpand(!expand);

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="body1" fontWeight={500}>
          Filter by year
        </Typography>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            displayEmpty
            value={selected}
            onClose={expandHandler}
            onOpen={expandHandler}
            onChange={dropdownChangeHandler}
            IconComponent={() => null}
            endAdornment={
              <InputAdornment position="end">
                <ExpandMore
                  expand={expand}
                  aria-expanded={expand}
                  aria-label="show more"
                >
                  <ArrowDropDownIcon color="primary" />
                </ExpandMore>
              </InputAdornment>
            }
            MenuProps={{
              PaperProps: {
                sx: {
                  boxShadow: "0px 6px 16px rgba(179, 202, 244, 0.6)",
                },
              },
            }}
            sx={{
              color: theme.palette.primary.main,
              height: 44,
            }}
            style={{ borderRadius: 12 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
