import {CryptoTransaction} from "../Crypto.type.ts";
import {useMemo} from "react";
import {
  MaterialReactTable, MRT_AggregationFn,
  MRT_ColumnDef,
  useMaterialReactTable
} from "material-react-table";
import {Box} from "@mui/material";
import {useGetTransactions} from "./useGetTransactions.ts";

import {getTradingCurrency} from "../../../utils/getTradingCurrency.ts";


// export type AggregationFn<TData extends CryptoTransaction[]> = (
//   getLeafRows: () => MRT_Row<TData>[],
//   getChildRows: () => MRT_Row<TData>[]
// ) => any

const holdingAverage: MRT_AggregationFn<CryptoTransaction> = (_, leafRows) => {
  let holdingCost = 0;
  let holdingAmount = 0;

  for(const row of leafRows) {
    const { executed, cost, side } = row.original;
    holdingCost = side === "BUY" ? holdingCost + cost : holdingCost - cost;
    holdingAmount = side === "BUY" ? holdingAmount + executed : holdingAmount - executed;
  }

  return holdingCost / holdingAmount;
}

const exectuedSum: MRT_AggregationFn<CryptoTransaction> = (_, leafRows) => {
  return leafRows.reduce((sum, row) => {
    const { side, executed } = row.original;
    side === "BUY" ? sum += executed : sum -= executed;
    return sum;
  }, 0)
}

const costSum: MRT_AggregationFn<CryptoTransaction> = (_, leafRows) => {
  return leafRows.reduce((sum, row) => {
    const { side, cost } = row.original;
    side === "BUY" ? sum += cost : sum -= cost
    return sum;
  }, 0)
}


const initData: CryptoTransaction[] = [
  {
    name: "Tao",
    pair: "TAOUSDT",
    side: "BUY",
    executed: 7.35,
    price: 540,
    cost: 3978,
  }
]


export default function Transactions() {
  const columns = useMemo<MRT_ColumnDef<CryptoTransaction>[]>(() => [
    {
      header: "Token",
      accessorKey: "name",
      size: 30,
    },
    {
      header: "Pair",
      accessorKey: "pair",
      size: 30,
    },
    {
      header: "Side",
      accessorKey: "side",
      size: 150,
      Cell: ({ cell , row}) => (
        <Box
          component="span"
          sx={(theme) => ({
            backgroundColor:
              cell.getValue<string>() === "BUY" ?
                theme.palette.success.dark :
                theme.palette.error.dark,
            borderRadius: '0.25rem',
            color: "#fff",
            maxWidth: '9ch',
            p: '0.25rem'
          })}
        >
          { row.original.side }
        </Box>
      )
    },
    {
      header: "Executed",
      accessorKey: "executed",
      size: 150,
      aggregationFn: exectuedSum,
      AggregatedCell: ({ cell, row }) => (
        <>
          Holding:
          <Box sx={{ color: "info.main", fontWeight: "bold"}}>
            {
              cell.getValue<number>()
            }
            {
              row.original.name
            }
          </Box>
        </>
      )
    },
    {
      header: "Price",
      accessorKey: "price",
      size: 150,
      aggregationFn: holdingAverage,
      AggregatedCell: ({ cell, row }) => (
        <>
          Holding Price:
          <Box sx={{ color: 'success.main', fontWeight: 'bold'}}>
            {
              cell.getValue<number>()
            }
            {
              getTradingCurrency(row.original.pair, row.original.name)
            }
          </Box>
        </>
      ),
      Cell: ({ cell , row}) => (
        <span>
          { cell.getValue<number>() }
          { getTradingCurrency(row.original.pair, row.original.name) }
        </span>
      )
    },
    {
      header: "TXN Cost",
      size: 150,
      accessorKey: "cost",
      aggregationFn: costSum,
      AggregatedCell: ({ cell, row}) => (
        <>
          TXN Cost:
          <Box sx={{ color: 'success.main', fontWeight: 'bold'}}>
            { cell.getValue<number>() }
            { getTradingCurrency(row.original.pair, row.original.name)}
          </Box>
        </>
      ),
      Cell: ({ cell ,row}) => (
        <>
          { cell.getValue<number>() }
          { getTradingCurrency(row.original.pair, row.original.name)}
        </>
      )
    }
  ], [])
  const { transactions, isLoading } = useGetTransactions();

  const table = useMaterialReactTable({
    columns,
    data: transactions || initData,
    enableGrouping: true,
    initialState: {
      density: "compact",
      grouping: ['pair']
    }
  });

  if(isLoading || !transactions.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  )
}