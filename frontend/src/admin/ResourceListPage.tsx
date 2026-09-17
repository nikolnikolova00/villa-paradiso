import { useList } from '@refinedev/core';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

type ResourceListPageProps = {
  resource: string;
};

export const ResourceListPage = ({ resource }: ResourceListPageProps) => {
  const { query, result } = useList({ resource });

  const items = result.data ?? [];
  const columns = items?.length > 0 ? Object.keys(items[0]) : [];

  return (
    <Paper>
      <Typography variant="h6" sx={{ p: 2, textTransform: 'capitalize' }}>
        {resource}
      </Typography>
      {columns?.length > 0 && (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => {
                const record = item as Record<string, unknown>;
                return (
                  <TableRow key={String(record.id ?? '')}>
                    {columns.map((column) => (
                      <TableCell key={column}>
                        {String(record[column] ?? '')}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {!query.isLoading && items?.length === 0 && (
        <Typography sx={{ p: 2 }}>No {resource} yet.</Typography>
      )}
    </Paper>
  );
};
