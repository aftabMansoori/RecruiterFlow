import React, { useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
} from "@mui/material";

import { SHIPPING_RATES, ROUTES, ITEMS_PER_PAGE } from "constants";
import {
  formatCurrency,
  getPaginatedBoxes,
  getTotalPages,
} from "services/boxService";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: 1000,
  margin: '2rem auto',
  padding: '0 1rem',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
}));

const EmptyPaper = styled(Paper)(({ theme }) => ({
  padding: '3rem',
  textAlign: 'center',
}));

const EmptyText = styled(Typography)(({ theme }) => ({
  marginBottom: '1rem',
}));

const ColorBox = styled(Box)(({ theme, color }) => ({
  width: 30,
  height: 30,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `rgb(${color})`,
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const ColorWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const ColorText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const PaginationWrapper = styled(Box)(({ theme }) => ({
  marginTop: '1.5rem',
}));

const Summary = styled(Typography)(({ theme }) => ({
  textAlign: 'right',
  marginBottom: '1rem',
}));

const PaginationButtons = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ReceiverNameCell = styled(TableCell)(({ theme }) => ({
  width: '200px',
  minWidth: '200px',
  maxWidth: '200px',
}));

export default function BoxList() {
  const boxes = useSelector((state) => state.boxes.boxes);
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = useMemo(() => {
    return getTotalPages(boxes.length, ITEMS_PER_PAGE);
  }, [boxes.length]);

  const currentPage = useMemo(() => {
    const pageFromUrl = parseInt(searchParams.get("page"), 10);
    if (isNaN(pageFromUrl) || pageFromUrl < 1) {
      return 1;
    }
    if (pageFromUrl > totalPages && totalPages > 0) {
      return totalPages;
    }
    return pageFromUrl;
  }, [searchParams, totalPages]);

  useEffect(() => {
    const urlPage = searchParams.get("page");

    if (totalPages === 0) {
      return;
    }

    if (urlPage === null) {
      setSearchParams({ page: "1" }, { replace: true });
      return;
    }

    const urlPageNo = parseInt(urlPage, 10);

    if (isNaN(urlPageNo) || urlPageNo < 1) {
      setSearchParams({ page: "1" }, { replace: true });
      return;
    }

    if (urlPageNo > totalPages && totalPages > 0) {
      setSearchParams({ page: totalPages.toString() }, { replace: true });
      return;
    }
  }, [totalPages, searchParams, setSearchParams]);

  const getCountryName = (countryKey) => {
    return SHIPPING_RATES[countryKey]?.name || countryKey;
  };

  const paginatedBoxes = useMemo(() => {
    return getPaginatedBoxes(boxes, currentPage, ITEMS_PER_PAGE);
  }, [boxes, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({ page: page.toString() });
    }
  };

  return (
    <Container>
      <Title variant="h1">
        Shipping Boxes
      </Title>

      {boxes.length === 0 ? (
        <EmptyPaper>
          <EmptyText variant="body1" color="text.secondary">
            No boxes have been added yet.
          </EmptyText>
          <Button
            component={Link}
            to={ROUTES.ADD_BOX}
            variant="contained"
            size="large"
          >
            Add your first box
          </Button>
        </EmptyPaper>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <ReceiverNameCell>Receiver Name</ReceiverNameCell>
                  <TableCell>Weight (kg)</TableCell>
                  <TableCell>Box Colour</TableCell>
                  <TableCell>Destination</TableCell>
                  <TableCell align="right">Shipping Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedBoxes.map((box) => (
                  <StyledTableRow key={box.id}>
                    <ReceiverNameCell>{box.receiverName}</ReceiverNameCell>
                    <TableCell>{box.weight}</TableCell>
                    <TableCell>
                      <ColorWrapper>
                        <ColorBox color={box.boxColour} />
                        <ColorText variant="caption" color="text.secondary">
                          ({box.boxColour})
                        </ColorText>
                      </ColorWrapper>
                    </TableCell>
                    <TableCell>{getCountryName(box.destinationCountry)}</TableCell>
                    <TableCell align="right">{formatCurrency(box.shippingCost)}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <PaginationWrapper>
            <Summary variant="body2" color="text.secondary">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
              {Math.min(currentPage * ITEMS_PER_PAGE, boxes.length)} of{" "}
              {boxes.length} boxes
            </Summary>

            {totalPages > 1 && (
              <PaginationButtons direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </PaginationButtons>
            )}
          </PaginationWrapper>
        </>
      )}
    </Container>
  );
}
