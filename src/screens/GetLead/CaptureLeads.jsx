import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const CaptureLeads = ({ navigateTo }) => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="large-desktop"
      style={{
        gap:
          screenWidth < 744
            ? "80px"
            : screenWidth >= 744 && screenWidth < 1728
              ? "180px"
              : screenWidth >= 1728
                ? "247px"
                : undefined,
        minWidth:
          screenWidth < 744
            ? "390px"
            : screenWidth >= 744 && screenWidth < 1728
              ? "744px"
              : screenWidth >= 1728
                ? "1728px"
                : undefined,
        padding:
          (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
            ? "32px 0px 0px"
            : screenWidth >= 1728
              ? "100px 0px 0px"
              : undefined,
      }}
    >
      <div
        className="frame"
        style={{
          alignItems:
            (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
              ? "flex-start"
              : screenWidth >= 1728
                ? "center"
                : undefined,
          gap:
            screenWidth < 744
              ? "150px"
              : screenWidth >= 1728 ||
                  (screenWidth >= 744 && screenWidth < 1728)
                ? "200px"
                : undefined,
          padding:
            screenWidth < 744
              ? "0px 32px 64px"
              : screenWidth >= 744 && screenWidth < 1728
                ? "0px 60px"
                : screenWidth >= 1728
                  ? "0px 100px"
                  : undefined,
        }}
      >
        <div
          className="div"
          style={{
            gap:
              screenWidth >= 1728
                ? "50px"
                : (screenWidth >= 744 && screenWidth < 1728) ||
                    screenWidth < 744
                  ? "90px"
                  : undefined,
          }}
        >
          {screenWidth >= 1728 && (
            <div className="group">
              <div className="text-wrapper">lano</div>

              <div className="text-wrapper-2">Get early access ↗</div>

              <div className="text-wrapper-3">Log in</div>

              <div className="frame-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">EN</div>
                </div>

                <div className="frame-3">
                  <div className="text-wrapper-5">ES</div>
                </div>

                <div className="frame-3">
                  <div className="text-wrapper-5">PT</div>
                </div>
              </div>
            </div>
          )}

          {((screenWidth >= 744 && screenWidth < 1728) ||
            screenWidth < 744) && (
            <>
              <div
                className="frame-4"
                style={{
                  alignSelf:
                    screenWidth >= 744 && screenWidth < 1728
                      ? "stretch"
                      : undefined,
                  display:
                    screenWidth < 744
                      ? "inline-flex"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "flex"
                        : undefined,
                  width:
                    screenWidth >= 744 && screenWidth < 1728
                      ? "100%"
                      : undefined,
                }}
              >
                <div
                  className="frame-5"
                  style={{
                    gap:
                      screenWidth < 744
                        ? "4px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "8px"
                          : undefined,
                  }}
                >
                  <div
                    className="frame-6"
                    style={{
                      padding:
                        screenWidth < 744
                          ? "6px 8px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "8px 12px"
                            : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-6"
                      style={{
                        fontSize:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                              ? "16px"
                              : undefined,
                        lineHeight:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                              ? "16px"
                              : undefined,
                      }}
                    >
                      EN
                    </div>
                  </div>

                  <div
                    className="frame-7"
                    style={{
                      padding:
                        screenWidth < 744
                          ? "6px 8px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "8px 12px"
                            : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-7"
                      style={{
                        fontSize:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                              ? "16px"
                              : undefined,
                        lineHeight:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                              ? "16px"
                              : undefined,
                      }}
                    >
                      ES
                    </div>
                  </div>

                  <div
                    className="frame-8"
                    style={{
                      padding:
                        screenWidth < 744
                          ? "6px 8px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "8px 12px"
                            : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-8"
                      style={{
                        fontSize:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                              ? "16px"
                              : undefined,
                        lineHeight:
                          screenWidth < 744
                            ? "14px"
                            : screenWidth >= 744 && screenWidth < 1728
                              ? "16px"
                              : undefined,
                      }}
                    >
                      PT
                    </div>
                  </div>
                </div>

                <div
                  className="frame-9"
                  style={{
                    alignSelf:
                      screenWidth >= 744 && screenWidth < 1728
                        ? "stretch"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "326px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "100%"
                          : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-9"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "36px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "48px"
                            : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "36px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "48px"
                            : undefined,
                      marginBottom:
                        screenWidth >= 744 && screenWidth < 1728
                          ? "-5.00px"
                          : undefined,
                      marginTop:
                        screenWidth < 744
                          ? "-1.00px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "-7.00px"
                            : undefined,
                    }}
                  >
                    lano
                  </div>

                  <div
                    className="text-wrapper-10"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "14px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                      letterSpacing:
                        screenWidth < 744
                          ? "-0.70px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "-0.80px"
                            : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "14px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                    }}
                  >
                    Log in
                  </div>

                  <div
                    className="text-wrapper-11"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "14px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                      letterSpacing:
                        screenWidth < 744
                          ? "-0.70px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "-0.80px"
                            : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "14px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "16px"
                            : undefined,
                    }}
                  >
                    Get early access ↗
                  </div>
                </div>
              </div>

              <div className="frame-10">
                <div className="frame-11">
                  <p
                    className="p"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "40px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "80px"
                            : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "40px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "80px"
                            : undefined,
                    }}
                  >
                    Get early access to Lano
                  </p>

                  <div
                    className="text-wrapper-12"
                    style={{
                      fontSize:
                        screenWidth < 744
                          ? "20px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "32px"
                            : undefined,
                      letterSpacing:
                        screenWidth < 744
                          ? "-1.00px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "-1.60px"
                            : undefined,
                      lineHeight:
                        screenWidth < 744
                          ? "20px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "32px"
                            : undefined,
                    }}
                  >
                    Join waitlist and ----------
                  </div>
                </div>

                <div
                  className="frame-12"
                  style={{
                    alignSelf:
                      screenWidth >= 744 && screenWidth < 1728
                        ? "stretch"
                        : undefined,
                    display:
                      screenWidth < 744
                        ? "inline-flex"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "flex"
                          : undefined,
                    width:
                      screenWidth >= 744 && screenWidth < 1728
                        ? "100%"
                        : undefined,
                  }}
                >
                  <div
                    className="frame-13"
                    style={{
                      alignSelf:
                        screenWidth >= 744 && screenWidth < 1728
                          ? "stretch"
                          : undefined,
                      width:
                        screenWidth < 744
                          ? "326px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "100%"
                            : undefined,
                    }}
                  >
                    <div className="text-wrapper-13">Name</div>
                  </div>

                  <div
                    className="frame-14"
                    style={{
                      alignSelf:
                        screenWidth >= 744 && screenWidth < 1728
                          ? "stretch"
                          : undefined,
                      width:
                        screenWidth < 744
                          ? "326px"
                          : screenWidth >= 744 && screenWidth < 1728
                            ? "100%"
                            : undefined,
                    }}
                  >
                    <div className="text-wrapper-13">Email</div>
                  </div>
                </div>

                <div
                  className="frame-15"
                  style={{
                    alignSelf:
                      screenWidth >= 744 && screenWidth < 1728
                        ? "stretch"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "326px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "100%"
                          : undefined,
                  }}
                  onClick={() => navigateTo('payment')}
                >
                  <div className="text-wrapper-14">Send</div>
                </div>
              </div>
            </>
          )}
        </div>

        {screenWidth >= 1728 && (
          <div className="frame-16">
            <div className="frame-11">
              <p className="text-wrapper-15">Get early access to Lano</p>

              <div className="text-wrapper-16">
                Join waitlist and ----------
              </div>
            </div>

            <div className="frame-11">
              <div className="frame-17">
                <div className="text-wrapper-13">Name</div>
              </div>

              <div className="frame-17">
                <div className="text-wrapper-13">Email</div>
              </div>
            </div>

            <div className="frame-18" onClick={() => navigateTo('payment')} style={{ cursor: "pointer" }}>
              <div className="text-wrapper-14">Send</div>
            </div>
          </div>
        )}
      </div>

      <div
        className="frame-wrapper"
        style={{
          alignSelf:
            screenWidth >= 1728 || (screenWidth >= 744 && screenWidth < 1728)
              ? "stretch"
              : undefined,
          height:
            screenWidth < 744
              ? "420px"
              : screenWidth >= 744 && screenWidth < 1728
                ? "577px"
                : screenWidth >= 1728
                  ? "680px"
                  : undefined,
          padding:
            screenWidth < 744
              ? "250px 32px 0px"
              : screenWidth >= 744 && screenWidth < 1728
                ? "300px 100px 0px"
                : screenWidth >= 1728
                  ? "360px 100px 0px"
                  : undefined,
          width:
            screenWidth < 744
              ? "390px"
              : screenWidth >= 1728 ||
                  (screenWidth >= 744 && screenWidth < 1728)
                ? "100%"
                : undefined,
        }}
      >
        <div
          className="frame-19"
          style={{
            alignItems: screenWidth < 744 ? "flex-start" : undefined,
            display: screenWidth < 744 ? "flex" : undefined,
            flex: screenWidth < 744 ? "0 0 auto" : undefined,
            flexDirection: screenWidth < 744 ? "column" : undefined,
            gap: screenWidth < 744 ? "12px" : undefined,
            height:
              screenWidth >= 1728 || (screenWidth >= 744 && screenWidth < 1728)
                ? "146px"
                : undefined,
          }}
        >
          <div
            className="text-wrapper-17"
            style={{
              fontSize:
                screenWidth < 744
                  ? "36px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "48px"
                    : undefined,
              left:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "0"
                  : undefined,
              lineHeight:
                screenWidth < 744
                  ? "36px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "48px"
                    : undefined,
              marginTop: screenWidth < 744 ? "-1.00px" : undefined,
              position:
                screenWidth < 744
                  ? "relative"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "absolute"
                    : undefined,
              top:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "-1px"
                  : undefined,
              width: screenWidth < 744 ? "fit-content" : undefined,
            }}
          >
            lano
          </div>

          <div
            className="policy-privacy"
            style={{
              fontSize:
                screenWidth < 744
                  ? "14px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "24px"
                    : undefined,
              left:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "0"
                  : undefined,
              lineHeight:
                screenWidth < 744
                  ? "14px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "24px"
                    : undefined,
              position:
                screenWidth < 744
                  ? "relative"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "absolute"
                    : undefined,
              top:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "119px"
                  : undefined,
              width: screenWidth < 744 ? "fit-content" : undefined,
            }}
          >
            {screenWidth < 744 && <>Policy &amp; Privacy</>}

            {(screenWidth >= 1728 ||
              (screenWidth >= 744 && screenWidth < 1728)) && (
              <p className="text-wrapper-18">
                All rights protected © Lano 2025
              </p>
            )}
          </div>

          <div
            className="all-rights-protected"
            style={{
              fontSize:
                screenWidth < 744
                  ? "14px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "24px"
                    : undefined,
              left:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "0"
                  : undefined,
              lineHeight:
                screenWidth < 744
                  ? "14px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "24px"
                    : undefined,
              position:
                screenWidth < 744
                  ? "relative"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "absolute"
                    : undefined,
              top:
                screenWidth >= 1728 ||
                (screenWidth >= 744 && screenWidth < 1728)
                  ? "71px"
                  : undefined,
              width: screenWidth < 744 ? "fit-content" : undefined,
            }}
          >
            {screenWidth < 744 && (
              <p className="text-wrapper-18">
                All rights protected © Lano 2025
              </p>
            )}

            {(screenWidth >= 1728 ||
              (screenWidth >= 744 && screenWidth < 1728)) && (
              <>Policy &amp; Privacy</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
