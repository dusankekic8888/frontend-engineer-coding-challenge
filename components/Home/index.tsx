import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

// component
import InputAmount from "../InputAmount";
import Calculate from "../Calculate";
import roundAmountHooks from "../Hooks";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [dayToProgress, setDayToProgress] = useState(0);
  const [balance, setBalance] = useState(1000);
  const [depositBalance, setDepositBalance] = useState(false);
  const [withDrawBalance, setWithDrawBalance] = useState(false);

  interface AmountProps {
    type: string;
    amount: number;
  }

  const handleConfirm = (props: AmountProps) => {
    if (props.type === "deposit") {
      if (props.amount != NaN) {
        setBalance(roundAmountHooks(balance + props.amount));
        if (balance < balance + props.amount) {
          setDepositBalance(true);
        }
      }
    } else {
      if (props.amount != NaN) {
        if (balance >= props.amount) {
          setBalance(roundAmountHooks(balance - props.amount));
          setWithDrawBalance(false);
        } else {
          setWithDrawBalance(true);
        }
      }
    }
  };
  return (
    <>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={3} mt={5}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box mb={3} mt={3}>
                <Typography
                  gutterBottom
                  variant="h5"
                  align="center"
                  component="div"
                >
                  USDC Balance <br /> {balance} USDC
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={12} md={4} mt={5}>
          <Card sx={{ minWidth: 100 }}>
            <CardContent>
              <Box mb={3} mt={3}>
                <Typography
                  gutterBottom
                  variant="h5"
                  align="center"
                  component="div"
                >
                  Day to Progress
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  align="center"
                  component="div"
                >
                  <InputAmount
                    onChange={(e) => setDayToProgress(parseInt(e.target.value))}
                    id="day-to-progress"
                    label=""
                    type="text"
                    placeholder="Input Day to Progress"
                    wrapperClassName=""
                    required={true}
                  />
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Calculate
            title="Compound"
            id="compound"
            currentAPY={5}
            dayToProgress={dayToProgress}
            onConfirm={(type, amount) => handleConfirm({ type, amount })}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Calculate
            title="Aave"
            id="aave"
            currentAPY={3}
            dayToProgress={dayToProgress}
            onConfirm={(type, amount) => handleConfirm({ type, amount })}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Calculate
            title="Curve"
            id="curve"
            currentAPY={2.5}
            dayToProgress={dayToProgress}
            onConfirm={(type, amount) => handleConfirm({ type, amount })}
          />
        </Grid>
      </Grid>
      {depositBalance && (
        <Alert variant="filled" severity="success">
          success
        </Alert>
      )}
      {withDrawBalance && (
        <Alert variant="filled" severity="error">
          Can not withdraw because your balance is low than amount
        </Alert>
      )}
    </>
  );
};

export default Home;
