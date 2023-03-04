import { useState } from "react";
import moment from "moment";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  Grid,
  Typography,
  TextField,
  styled,
  InputAdornment,
  FormHelperText,
  useTheme,
  useMediaQuery,
  FormControl,
} from "@mui/material";
import {
  AttachMoney,
  CalendarMonth,
  ArrowLeft,
  ArrowRight,
} from "@mui/icons-material";
import { grey, indigo } from "@mui/material/colors";

import { formatAmount } from "helpers";

const OutlinedButton = styled(Button)(({ theme }) => ({
  backgroundColor: grey[50],
  borderRadius: 10,
  border: `1.5px solid ${theme.palette.primary.main}`,
  textTransform: "none",
}));

export default function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const theme = useTheme();

  const matches500 = useMediaQuery("(max-width:500px)");
  const matchesMd = useMediaQuery("(max-width:865px)");

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) =>
    setEnteredTitle(event.target.value.replace(/[^a-zA-Z ]/g, ""));
  const amountChangeHandler = (event) =>
    setEnteredAmount(event.target.value.replace(/[^0-9]/g, ""));
  const dateChangeHandler = (date) => setEnteredDate(date);

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: moment(enteredDate)._d,
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Grid container>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          item
          xs={matchesMd ? 12 : 6}
          style={{ marginBottom: 16 }}
        >
          {!matchesMd && (
            <Grid item>
              <Typography variant="caption">Title</Typography>
            </Grid>
          )}
          <Grid item>
            <TextField
              label={matchesMd ? "Title" : undefined}
              helperText={!enteredTitle.length ? "Required" : undefined}
              variant="outlined"
              value={enteredTitle}
              onChange={titleChangeHandler}
              sx={{
                "& .MuiInputBase-root": {
                  width: matches500 ? "26.7rem" : matchesMd ? "24rem" : "22rem",
                  height: 44,
                  borderRadius: "10px",
                  color: theme.palette.primary.main,
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          item
          xs={matchesMd ? 12 : 6}
          style={{ marginBottom: matchesMd ? 16 : undefined }}
        >
          {!matchesMd && (
            <Grid item>
              <Typography variant="caption">Amount</Typography>
            </Grid>
          )}
          <Grid item>
            <TextField
              label={matchesMd ? "Amount" : undefined}
              helperText={!enteredAmount.length ? "Required" : undefined}
              variant="outlined"
              value={formatAmount(enteredAmount)}
              onChange={amountChangeHandler}
              InputProps={{
                startAdornment: !matchesMd && (
                  <InputAdornment position="start">
                    <AttachMoney color="primary" />
                  </InputAdornment>
                ),
                endAdornment: matchesMd && (
                  <InputAdornment position="end">
                    <AttachMoney color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  width: matches500 ? "26.7rem" : matchesMd ? "24rem" : "22rem",
                  height: 44,
                  borderRadius: "10px",
                  color: theme.palette.primary.main,
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          item
          xs={matchesMd ? 12 : 6}
        >
          {!matchesMd && (
            <Grid item>
              <Typography variant="caption">Date</Typography>
            </Grid>
          )}
          <Grid item>
            <FormControl>
              <DatePicker
                showDaysOutsideCurrentMonth
                format={"MM/DD/YYYY"}
                slots={{
                  openPickerIcon: CalendarMonth,
                  leftArrowIcon: ArrowLeft,
                  rightArrowIcon: ArrowRight,
                }}
                slotProps={{
                  openPickerIcon: { sx: { color: theme.palette.primary.main } },
                  leftArrowIcon: { sx: { color: theme.palette.primary.main } },
                  rightArrowIcon: { sx: { color: theme.palette.primary.main } },
                  day: {
                    sx: {
                      ":focus": {
                        border: `1px solid ${theme.palette.primary.main}`,
                      },
                    },
                  },
                  desktopPaper: {
                    sx: {
                      boxShadow: "0px 6px 16px rgba(179, 202, 244, 0.6)",
                      borderRadius: "12px",
                      p: 1,
                    },
                  },
                  // * important props
                  // switchViewIcon: { sx: { color: theme.palette.primary.main } },
                  // layout: { sx: { background: "pink" } },
                  // popper: { sx: { background: "pink" } },
                }}
                value={enteredDate}
                onChange={dateChangeHandler}
                sx={{
                  "& .MuiInputBase-root": {
                    width: matches500
                      ? "26.7rem"
                      : matchesMd
                      ? "24rem"
                      : "22rem",
                    height: 44,
                    marginBottom:
                      matchesMd && typeof enteredDate !== "string"
                        ? 3
                        : undefined,
                    borderRadius: "10px",
                    color: theme.palette.primary.main,
                  },
                }}
              />
              {typeof enteredDate === "string" && (
                <FormHelperText
                  style={{ marginBottom: matchesMd ? 24 : undefined }}
                >
                  Required
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={matchesMd ? "space-between" : "flex-end"}>
        <Grid item>
          <OutlinedButton variant="outlined" type="button" onClick={onCancel}>
            Cancel
          </OutlinedButton>
        </Grid>
        <Grid item style={{ marginLeft: "1rem" }}>
          <Button
            disableElevation
            variant="contained"
            type="submit"
            style={{
              borderRadius: 10,
              textTransform: "none",
            }}
            sx={{
              ":disabled": {
                backgroundColor: indigo[100],
                color: grey[50],
              },
            }}
            disabled={
              !enteredAmount.length ||
              !enteredTitle.length ||
              typeof enteredDate === "string"
            }
          >
            Add Expense
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
