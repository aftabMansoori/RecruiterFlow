import React, { useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { SHIPPING_RATES, ROUTES, ITEMS_PER_PAGE } from "../../constants";
import {
  formatCurrency,
  getPaginatedBoxes,
  getTotalPages,
} from "../../services/boxService";

import styles from "./BoxList.module.css";

function BoxList() {
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
    <div className={styles.container}>
      <h1 className={styles.title}>Shipping Boxes</h1>

      {boxes.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No boxes have been added yet.</p>
          <Link to={ROUTES.ADD_BOX} className={styles.addLink}>
            Add your first box
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Receiver Name</th>
                  <th>Weight (kg)</th>
                  <th>Box Colour</th>
                  <th>Destination</th>
                  <th>Shipping Cost</th>
                </tr>
              </thead>
              <tbody>
                {paginatedBoxes.map((box) => (
                  <tr key={box.id}>
                    <td>{box.receiverName}</td>
                    <td>{box.weight}</td>
                    <td>
                      <div className={styles.colorCell}>
                        <div
                          className={styles.colorBox}
                          style={{ backgroundColor: `rgb(${box.boxColour})` }}
                        ></div>
                        <span className={styles.colorText}>
                          ({box.boxColour})
                        </span>
                      </div>
                    </td>
                    <td>{getCountryName(box.destinationCountry)}</td>
                    <td>{formatCurrency(box.shippingCost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.paginationWrapper}>
            <div className={styles.summary}>
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
              {Math.min(currentPage * ITEMS_PER_PAGE, boxes.length)} of{" "}
              {boxes.length} boxes
            </div>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={styles.pageBtn}
                >
                  Previous
                </button>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={styles.pageBtn}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default BoxList;
