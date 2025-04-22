import React from "react";
import { useResponsive } from "../../ResponsiveContext";
import "./style.css";

export const LargeDesktop = () => {
  const { screenWidth } = useResponsive();

  return (
    <div
      className="large-desktop"
      style={{
        gap:
          screenWidth < 744
            ? "140px"
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
          gap:
            screenWidth < 744
              ? "150px"
              : screenWidth >= 744 && screenWidth < 1728
                ? "200px"
                : screenWidth >= 1728
                  ? "300px"
                  : undefined,
          padding:
            screenWidth < 744
              ? "0px 32px"
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
              (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                ? "90px"
                : screenWidth >= 1728
                  ? "50px"
                  : undefined,
          }}
        >
          <div
            className="frame-2"
            style={{
              alignItems:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "flex-end"
                  : undefined,
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
              flex:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "0 0 auto"
                  : undefined,
              flexDirection:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "column"
                  : undefined,
              gap:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "16px"
                  : undefined,
              height: screenWidth >= 1728 ? "48px" : undefined,
              marginRight: screenWidth >= 1728 ? "-4.00px" : undefined,
              width:
                screenWidth >= 744 && screenWidth < 1728
                  ? "100%"
                  : screenWidth >= 1728
                    ? "1532px"
                    : undefined,
            }}
          >
            {((screenWidth >= 744 && screenWidth < 1728) ||
              screenWidth < 744) && (
              <>
                <div
                  className="frame-3"
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
                    className="div-wrapper"
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
                      className="text-wrapper"
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
                    className="frame-4"
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
                      className="text-wrapper-2"
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
                    className="frame-5"
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
                      className="text-wrapper-3"
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
                  className="frame-6"
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
                    className="text-wrapper-4"
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
                    className="text-wrapper-5"
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
                    className="text-wrapper-6"
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
              </>
            )}

            {screenWidth >= 1728 && (
              <>
                <div className="text-wrapper-7">lano</div>

                <div className="text-wrapper-8">Get early access ↗</div>

                <div className="frame-7">
                  <div className="frame-8">
                    <div className="text-wrapper-9">EN</div>
                  </div>

                  <div className="frame-9">
                    <div className="text-wrapper-10">ES</div>
                  </div>

                  <div className="frame-9">
                    <div className="text-wrapper-10">PT</div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div
            className="frame-10"
            style={{
              alignItems:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "flex-start"
                  : undefined,
              alignSelf:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "stretch"
                  : undefined,
              display:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "flex"
                  : undefined,
              flex:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "0 0 auto"
                  : undefined,
              flexDirection:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "column"
                  : undefined,
              gap:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "48px"
                  : undefined,
              height: screenWidth >= 1728 ? "1176px" : undefined,
              marginRight: screenWidth >= 1728 ? "-4.00px" : undefined,
              width:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "100%"
                  : screenWidth >= 1728
                    ? "1532px"
                    : undefined,
            }}
          >
            {screenWidth < 744 && (
              <div className="frame-11">
                <div className="text-wrapper-11">SPEND → SAVE</div>

                <p className="p">
                  Love spending, hate saving? Let Lano flip the script.
                </p>
              </div>
            )}

            {screenWidth >= 744 && screenWidth < 1728 && (
              <>
                <div className="frame-12">
                  <img
                    className="SPEND-SAVE"
                    alt="Spend SAVE"
                    src="/img/spend-save.png"
                  />

                  <p className="text-wrapper-12">
                    Love spending, hate saving? Let Lano flip the script.
                  </p>
                </div>

                <div className="frame-13">
                  <div className="text-wrapper-13">Scroll down</div>

                  <div className="text-wrapper-14">↓</div>
                </div>
              </>
            )}

            {screenWidth >= 1728 && (
              <>
                <div className="text-wrapper-15">SPEND → SAVE</div>

                <div className="frame-14">
                  <div className="text-wrapper-13">Scroll down</div>

                  <div className="text-wrapper-14">↓</div>
                </div>

                <p className="text-wrapper-16">
                  Love spending, hate saving? Let Lano flip the script.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="frame-15">
          <div
            className="does-this-hit-home"
            style={{
              fontSize:
                screenWidth < 744
                  ? "32px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "64px"
                    : screenWidth >= 1728
                      ? "96px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "32px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "64px"
                    : screenWidth >= 1728
                      ? "96px"
                      : undefined,
            }}
          >
            {((screenWidth >= 744 && screenWidth < 1728) ||
              screenWidth < 744) && <>Does this hit home?</>}

            {screenWidth >= 1728 && (
              <p className="text-wrapper-57">Does this ring a bell?</p>
            )}
          </div>

          <div className="frame-16">
            <div className="frame-17">
              <div className="frame-18">
                <p
                  className="text-wrapper-17"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-1.20px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-1.80px"
                          : screenWidth >= 1728
                            ? "-2.40px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                  }}
                >
                  Bills just catch me by surprise.
                </p>

                <p
                  className="text-wrapper-18"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.70px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.80px"
                          : screenWidth >= 1728
                            ? "-1.20px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                  }}
                >
                  “It’s stressful to plan out my money and get ready for
                  unexpected expenses that come out of the wild blue.”
                </p>
              </div>

              <div
                className="switch"
                style={{
                  height:
                    screenWidth < 744
                      ? "30px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "44px"
                        : undefined,
                  width:
                    screenWidth < 744
                      ? "60px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "88px"
                        : undefined,
                }}
              >
                <div
                  className="switch-2"
                  style={{
                    width:
                      screenWidth < 744
                        ? "22px"
                        : screenWidth >= 1728 ||
                            (screenWidth >= 744 && screenWidth < 1728)
                          ? "36px"
                          : undefined,
                  }}
                />
              </div>
            </div>

            <div className="frame-17">
              <div className="frame-18">
                <div
                  className="text-wrapper-19"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-1.20px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-1.80px"
                          : screenWidth >= 1728
                            ? "-2.40px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                  }}
                >
                  Cash sits idle, everywhere.
                </div>

                <p
                  className="text-wrapper-20"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.70px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.80px"
                          : screenWidth >= 1728
                            ? "-1.20px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                  }}
                >
                  “I have no idea what to do with my money; it’s hard to know
                  where to put and make the most out of it.”
                </p>
              </div>

              <div
                className="switch-wrapper"
                style={{
                  height:
                    screenWidth < 744
                      ? "30px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "44px"
                        : undefined,
                  width:
                    screenWidth < 744
                      ? "60px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "88px"
                        : undefined,
                }}
              >
                <div
                  className="switch-3"
                  style={{
                    width:
                      screenWidth < 744
                        ? "22px"
                        : screenWidth >= 1728 ||
                            (screenWidth >= 744 && screenWidth < 1728)
                          ? "36px"
                          : undefined,
                  }}
                />
              </div>
            </div>

            <div className="frame-17">
              <div className="frame-18">
                <div
                  className="text-wrapper-21"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-1.20px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-1.80px"
                          : screenWidth >= 1728
                            ? "-2.40px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                  }}
                >
                  Balance? Honestly no clue.
                </div>

                <p
                  className="text-wrapper-22"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.70px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.80px"
                          : screenWidth >= 1728
                            ? "-1.20px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                  }}
                >
                  “Honestly, I don’t even know how much I have; my money is
                  everywhere and I have no head to sort it out.”
                </p>
              </div>

              <div
                className="switch-4"
                style={{
                  height:
                    screenWidth < 744
                      ? "30px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "44px"
                        : undefined,
                  width:
                    screenWidth < 744
                      ? "60px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "88px"
                        : undefined,
                }}
              >
                <div
                  className="switch-5"
                  style={{
                    width:
                      screenWidth < 744
                        ? "22px"
                        : screenWidth >= 1728 ||
                            (screenWidth >= 744 && screenWidth < 1728)
                          ? "36px"
                          : undefined,
                  }}
                />
              </div>
            </div>

            <div className="frame-17">
              <div className="frame-18">
                <div
                  className="text-wrapper-23"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-1.20px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-1.80px"
                          : screenWidth >= 1728
                            ? "-2.40px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                  }}
                >
                  Spend first, pray later.
                </div>

                <p
                  className="text-wrapper-24"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.70px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.80px"
                          : screenWidth >= 1728
                            ? "-1.20px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                  }}
                >
                  “My money is out of control. I spend first and save what is
                  left, hoping the best will come.”
                </p>
              </div>

              <div
                className="switch-6"
                style={{
                  height:
                    screenWidth < 744
                      ? "30px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "44px"
                        : undefined,
                  width:
                    screenWidth < 744
                      ? "60px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "88px"
                        : undefined,
                }}
              >
                <div
                  className="switch-7"
                  style={{
                    width:
                      screenWidth < 744
                        ? "22px"
                        : screenWidth >= 1728 ||
                            (screenWidth >= 744 && screenWidth < 1728)
                          ? "36px"
                          : undefined,
                  }}
                />
              </div>
            </div>

            <div className="frame-17">
              <div className="frame-18">
                <div
                  className="text-wrapper-25"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-1.20px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-1.80px"
                          : screenWidth >= 1728
                            ? "-2.40px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "24px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "36px"
                          : screenWidth >= 1728
                            ? "48px"
                            : undefined,
                  }}
                >
                  Money choices overwhelm me.
                </div>

                <p
                  className="text-wrapper-26"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.70px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.80px"
                          : screenWidth >= 1728
                            ? "-1.20px"
                            : undefined,
                    lineHeight:
                      screenWidth < 744
                        ? "14px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "16px"
                          : screenWidth >= 1728
                            ? "24px"
                            : undefined,
                  }}
                >
                  “I neglect any money decisions. Everything seems too complex,
                  too risky, and too demanding.”
                </p>
              </div>

              <div
                className="switch-8"
                style={{
                  height:
                    screenWidth < 744
                      ? "30px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "44px"
                        : undefined,
                  width:
                    screenWidth < 744
                      ? "60px"
                      : screenWidth >= 1728 ||
                          (screenWidth >= 744 && screenWidth < 1728)
                        ? "88px"
                        : undefined,
                }}
              >
                <div
                  className="switch-9"
                  style={{
                    width:
                      screenWidth < 744
                        ? "22px"
                        : screenWidth >= 1728 ||
                            (screenWidth >= 744 && screenWidth < 1728)
                          ? "36px"
                          : undefined,
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="you-are-not-alone-wrapper"
            style={{
              padding:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "12px"
                  : screenWidth >= 1728
                    ? "20px"
                    : undefined,
            }}
          >
            <div
              className="you-are-not-alone"
              style={{
                fontSize:
                  screenWidth < 744
                    ? "14px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "16px"
                      : screenWidth >= 1728
                        ? "24px"
                        : undefined,
                letterSpacing:
                  screenWidth < 744
                    ? "-0.70px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-0.80px"
                      : screenWidth >= 1728
                        ? "-1.20px"
                        : undefined,
                lineHeight:
                  screenWidth < 744
                    ? "14px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "16px"
                      : screenWidth >= 1728
                        ? "24px"
                        : undefined,
              }}
            >
              <span
                className="span"
                style={{
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.10px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.13px"
                        : screenWidth >= 1728
                          ? "-0.29px"
                          : undefined,
                }}
              >
                You are not alone. <br />
              </span>

              <span
                className="text-wrapper-57"
                style={{
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.10px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.13px"
                        : screenWidth >= 1728
                          ? "-0.29px"
                          : undefined,
                }}
              >
                <br />
                Around half (
              </span>

              <a
                href="https://www.bankrate.com/loans/personal-loans/money-and-mental-health-survey/?utm_source=chatgpt.com#bankrates-insights"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  className="text-wrapper-27"
                  style={{
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.10px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.13px"
                          : screenWidth >= 1728
                            ? "-0.29px"
                            : undefined,
                  }}
                >
                  47 percent
                </span>
              </a>

              <span
                className="text-wrapper-57"
                style={{
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.10px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.13px"
                        : screenWidth >= 1728
                          ? "-0.29px"
                          : undefined,
                }}
              >
                ) of U.S. adults say money has a negative impact on their mental
                health, at least occasionally, causing anxiety, stress,
                worrisome thoughts, loss of sleep, depression or other effects.
                About two-thirds of Americans (
              </span>

              <a
                href="https://content.schwab.com/web/retail/public/about-schwab/schwab_modern_wealth_survey_2024_findings.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  className="text-wrapper-28"
                  style={{
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.10px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.13px"
                          : screenWidth >= 1728
                            ? "-0.29px"
                            : undefined,
                  }}
                >
                  64 percent
                </span>
              </a>

              <span
                className="text-wrapper-57"
                style={{
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.10px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.13px"
                        : screenWidth >= 1728
                          ? "-0.29px"
                          : undefined,
                }}
              >
                ) do not have a formal financial plan. Only a small portion (
              </span>

              <a
                href="https://content.schwab.com/web/retail/public/about-schwab/schwab_modern_wealth_survey_2024_findings.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  className="text-wrapper-29"
                  style={{
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.10px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.13px"
                          : screenWidth >= 1728
                            ? "-0.29px"
                            : undefined,
                  }}
                >
                  18 percent
                </span>
              </a>

              <span
                className="text-wrapper-57"
                style={{
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.10px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.13px"
                        : screenWidth >= 1728
                          ? "-0.29px"
                          : undefined,
                }}
              >
                ) of people feel they are on top of their finances. More than
                half (
              </span>

              <a
                href="https://unidosus.org/wp-content/uploads/2024/06/unidosus_oportun_bsp_latinobankingandfinancialhealthsurvey_memo_61124.pdf?utm_source=chatgpt.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  className="text-wrapper-30"
                  style={{
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.10px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.13px"
                          : screenWidth >= 1728
                            ? "-0.29px"
                            : undefined,
                  }}
                >
                  56 percent
                </span>
              </a>

              <span
                className="text-wrapper-57"
                style={{
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.10px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.13px"
                        : screenWidth >= 1728
                          ? "-0.29px"
                          : undefined,
                }}
              >
                ) of Latinos do not have any emergency or buffer fund, reporting
                less than $400 in their savings account. Today, an average
                consumer has around one-hundred thousand dollars (
              </span>

              <a
                href="https://www.experian.com/blogs/ask-experian/consumer-credit-review"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  className="text-wrapper-31"
                  style={{
                    letterSpacing:
                      screenWidth < 744
                        ? "-0.10px"
                        : screenWidth >= 744 && screenWidth < 1728
                          ? "-0.13px"
                          : screenWidth >= 1728
                            ? "-0.29px"
                            : undefined,
                  }}
                >
                  $105,056
                </span>
              </a>

              <span
                className="span-2"
                style={{
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.10px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.13px"
                        : screenWidth >= 1728
                          ? "-0.29px"
                          : undefined,
                }}
              >
                {((screenWidth >= 744 && screenWidth < 1728) ||
                  screenWidth < 744) && (
                  <>
                    ) in mortgage, medical or credit card debt.
                    <br />
                  </>
                )}

                {screenWidth >= 1728 && (
                  <>) in mortgage, medical or credit card debt.</>
                )}
              </span>
            </div>
          </div>
        </div>

        <div
          className="frame-19"
          style={{
            gap:
              screenWidth < 744
                ? "24px"
                : screenWidth >= 1728 ||
                    (screenWidth >= 744 && screenWidth < 1728)
                  ? "40px"
                  : undefined,
          }}
        >
          <p
            className="meet-lano-your"
            style={{
              alignSelf:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "stretch"
                  : undefined,
              fontSize:
                screenWidth < 744
                  ? "60px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "115px"
                    : screenWidth >= 1728
                      ? "192px"
                      : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "-3.00px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "-5.75px"
                    : screenWidth >= 1728
                      ? "-9.60px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "60px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "115px"
                    : screenWidth >= 1728
                      ? "192px"
                      : undefined,
              width: screenWidth >= 1728 ? "1528px" : undefined,
            }}
          >
            <span
              className="text-wrapper-32"
              style={{
                letterSpacing:
                  screenWidth < 744
                    ? "-1.80px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-6.61px"
                      : screenWidth >= 1728
                        ? "-18.43px"
                        : undefined,
              }}
            >
              Meet Lano
            </span>

            <span
              className="text-wrapper-57"
              style={{
                letterSpacing:
                  screenWidth < 744
                    ? "-1.80px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-6.61px"
                      : screenWidth >= 1728
                        ? "-18.43px"
                        : undefined,
              }}
            >
              ,<br />
              your trusted money pilot.
            </span>
          </p>

          <p
            className="we-turn-everyday"
            style={{
              fontSize:
                screenWidth < 744
                  ? "24px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "36px"
                    : screenWidth >= 1728
                      ? "48px"
                      : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "-1.20px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "-1.80px"
                    : screenWidth >= 1728
                      ? "-2.40px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "24px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "36px"
                    : screenWidth >= 1728
                      ? "48px"
                      : undefined,
            }}
          >
            <span
              className="text-wrapper-57"
              style={{
                letterSpacing:
                  screenWidth < 744
                    ? "-0.29px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-0.65px"
                      : screenWidth >= 1728
                        ? "-1.15px"
                        : undefined,
              }}
            >
              We turn everyday spending into automatic savings ———{" "}
            </span>

            <span
              className="text-wrapper-33"
              style={{
                letterSpacing:
                  screenWidth < 744
                    ? "-0.29px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-0.65px"
                      : screenWidth >= 1728
                        ? "-1.15px"
                        : undefined,
              }}
            >
              faster, easier, stress‑free.
              <br />{" "}
            </span>

            <span
              className="text-wrapper-57"
              style={{
                letterSpacing:
                  screenWidth < 744
                    ? "-0.29px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-0.65px"
                      : screenWidth >= 1728
                        ? "-1.15px"
                        : undefined,
              }}
            >
              Pay with Lano and we save a bit for you. Little by little. As
              simple as that. Lano is built for people, not spreadsheets: more
              care, less jargon.
              <br />
              <br />
            </span>

            <span
              className="text-wrapper-34"
              style={{
                letterSpacing:
                  screenWidth < 744
                    ? "-0.29px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-0.65px"
                      : screenWidth >= 1728
                        ? "-1.15px"
                        : undefined,
              }}
            >
              <br />
              <br />
              <br />
            </span>

            <span
              className="text-wrapper-57"
              style={{
                letterSpacing:
                  screenWidth < 744
                    ? "-0.29px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-0.65px"
                      : screenWidth >= 1728
                        ? "-1.15px"
                        : undefined,
              }}
            >
              Simple. Inclusive. Transparent. Uncompromised.
            </span>
          </p>
        </div>

        <div
          className="group"
          style={{
            height:
              screenWidth < 744
                ? "193px"
                : screenWidth >= 744 && screenWidth < 1728
                  ? "502px"
                  : screenWidth >= 1728
                    ? "878px"
                    : undefined,
          }}
        >
          <p
            className="not-a-bank-not-a"
            style={{
              fontSize:
                screenWidth < 744
                  ? "44px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "96px"
                    : screenWidth >= 1728
                      ? "200px"
                      : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "-2.20px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "-4.80px"
                    : screenWidth >= 1728
                      ? "-10.00px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "37.0px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "80.6px"
                    : screenWidth >= 1728
                      ? "168.0px"
                      : undefined,
              width:
                screenWidth < 744
                  ? "326px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "624px"
                    : screenWidth >= 1728
                      ? "1528px"
                      : undefined,
            }}
          >
            Not a bank. <br />
            Not a card. <br />
            Not a network.
          </p>

          <p
            className="text-wrapper-35"
            style={{
              fontSize:
                screenWidth < 744
                  ? "44px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "96px"
                    : screenWidth >= 1728
                      ? "200px"
                      : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "-2.20px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "-4.80px"
                    : screenWidth >= 1728
                      ? "-10.00px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "37.0px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "80.6px"
                    : screenWidth >= 1728
                      ? "168.0px"
                      : undefined,
              top:
                screenWidth < 744
                  ? "119px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "259px"
                    : screenWidth >= 1728
                      ? "542px"
                      : undefined,
              width:
                screenWidth < 744
                  ? "326px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "624px"
                    : screenWidth >= 1728
                      ? "1528px"
                      : undefined,
            }}
          >
            Just a personal money agent.
          </p>
        </div>

        <div
          className="frame-20"
          style={{
            gap:
              screenWidth < 744
                ? "32px"
                : screenWidth >= 744 && screenWidth < 1728
                  ? "40px"
                  : screenWidth >= 1728
                    ? "60px"
                    : undefined,
            marginRight:
              screenWidth < 744
                ? "-1294.00px"
                : screenWidth >= 744 && screenWidth < 1728
                  ? "-2116.00px"
                  : screenWidth >= 1728
                    ? "-1884.00px"
                    : undefined,
          }}
        >
          <div
            className="text-wrapper-36"
            style={{
              fontSize:
                screenWidth < 744
                  ? "32px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "64px"
                    : screenWidth >= 1728
                      ? "96px"
                      : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "-1.60px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "-3.20px"
                    : screenWidth >= 1728
                      ? "-4.80px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "32px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "64px"
                    : screenWidth >= 1728
                      ? "96px"
                      : undefined,
            }}
          >
            How does it work?
          </div>

          <div
            className="frame-21"
            style={{
              gap:
                screenWidth < 744
                  ? "30px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "60px"
                    : screenWidth >= 1728
                      ? "100px"
                      : undefined,
            }}
          >
            <div
              className="frame-22"
              style={{
                gap:
                  screenWidth < 744
                    ? "24px"
                    : screenWidth >= 1728 ||
                        (screenWidth >= 744 && screenWidth < 1728)
                      ? "40px"
                      : undefined,
              }}
            >
              <div
                className="text-wrapper-37"
                style={{
                  alignSelf:
                    (screenWidth >= 744 && screenWidth < 1728) ||
                    screenWidth < 744
                      ? "stretch"
                      : undefined,
                  fontSize:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-1.00px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-1.80px"
                        : screenWidth >= 1728
                          ? "-2.40px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                  whiteSpace: screenWidth >= 1728 ? "nowrap" : undefined,
                  width: screenWidth >= 1728 ? "fit-content" : undefined,
                }}
              >
                Connect your accounts
              </div>

              <img
                className="attachment"
                style={{
                  height:
                    screenWidth < 744
                      ? "649px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "1082px"
                        : screenWidth >= 1728
                          ? "1298px"
                          : undefined,
                  width:
                    screenWidth < 744
                      ? "300px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "500px"
                        : screenWidth >= 1728
                          ? "600px"
                          : undefined,
                }}
                alt="Attachment"
                src="/img/attachment-1-1.png"
              />
            </div>

            <div
              className="frame-23"
              style={{
                gap:
                  screenWidth < 744
                    ? "24px"
                    : screenWidth >= 1728 ||
                        (screenWidth >= 744 && screenWidth < 1728)
                      ? "40px"
                      : undefined,
              }}
            >
              <div
                className="text-wrapper-38"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-1.00px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-1.80px"
                        : screenWidth >= 1728
                          ? "-2.40px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                }}
              >
                Set a saving goal
              </div>

              <img
                className="img"
                style={{
                  height:
                    screenWidth < 744
                      ? "649px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "1082px"
                        : screenWidth >= 1728
                          ? "1298px"
                          : undefined,
                  width:
                    screenWidth < 744
                      ? "300px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "500px"
                        : screenWidth >= 1728
                          ? "600px"
                          : undefined,
                }}
                alt="Attachment"
                src="/img/attachment-1-1.png"
              />
            </div>

            <div
              className="frame-24"
              style={{
                gap:
                  screenWidth < 744
                    ? "24px"
                    : screenWidth >= 1728 ||
                        (screenWidth >= 744 && screenWidth < 1728)
                      ? "40px"
                      : undefined,
              }}
            >
              <div
                className="text-wrapper-39"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-1.00px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-1.80px"
                        : screenWidth >= 1728
                          ? "-2.40px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                }}
              >
                Spend to save
              </div>

              <img
                className="attachment-2"
                style={{
                  height:
                    screenWidth < 744
                      ? "649px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "1082px"
                        : screenWidth >= 1728
                          ? "1298px"
                          : undefined,
                  width:
                    screenWidth < 744
                      ? "300px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "500px"
                        : screenWidth >= 1728
                          ? "600px"
                          : undefined,
                }}
                alt="Attachment"
                src="/img/attachment-1-1.png"
              />
            </div>

            <div
              className="frame-25"
              style={{
                gap:
                  screenWidth < 744
                    ? "24px"
                    : screenWidth >= 1728 ||
                        (screenWidth >= 744 && screenWidth < 1728)
                      ? "40px"
                      : undefined,
              }}
            >
              <div
                className="text-wrapper-40"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-1.00px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-1.80px"
                        : screenWidth >= 1728
                          ? "-2.40px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                }}
              >
                Adjust to your needs
              </div>

              <img
                className="attachment-3"
                style={{
                  height:
                    screenWidth < 744
                      ? "649px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "1082px"
                        : screenWidth >= 1728
                          ? "1298px"
                          : undefined,
                  width:
                    screenWidth < 744
                      ? "300px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "500px"
                        : screenWidth >= 1728
                          ? "600px"
                          : undefined,
                }}
                alt="Attachment"
                src="/img/attachment-1-1.png"
              />
            </div>

            <div
              className="frame-26"
              style={{
                gap:
                  screenWidth < 744
                    ? "24px"
                    : screenWidth >= 1728 ||
                        (screenWidth >= 744 && screenWidth < 1728)
                      ? "40px"
                      : undefined,
              }}
            >
              <div
                className="text-wrapper-41"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-1.00px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-1.80px"
                        : screenWidth >= 1728
                          ? "-2.40px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "20px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "36px"
                        : screenWidth >= 1728
                          ? "48px"
                          : undefined,
                }}
              >
                Access your data
              </div>

              <img
                className="attachment-4"
                style={{
                  height:
                    screenWidth < 744
                      ? "649px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "1082px"
                        : screenWidth >= 1728
                          ? "1298px"
                          : undefined,
                  width:
                    screenWidth < 744
                      ? "300px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "500px"
                        : screenWidth >= 1728
                          ? "600px"
                          : undefined,
                }}
                alt="Attachment"
                src="/img/attachment-1-1.png"
              />
            </div>
          </div>
        </div>

        <div className="frame-27">
          <div
            className="free-forever"
            style={{
              alignSelf:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "stretch"
                  : undefined,
              fontSize:
                screenWidth < 744
                  ? "80px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "160px"
                    : screenWidth >= 1728
                      ? "400px"
                      : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "-4.00px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "-8.00px"
                    : screenWidth >= 1728
                      ? "-20.00px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "59.2px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "118.4px"
                    : screenWidth >= 1728
                      ? "296.0px"
                      : undefined,
              width: screenWidth >= 1728 ? "1528px" : undefined,
            }}
          >
            Free —<br />
            Forever.
          </div>

          <p
            className="text-wrapper-42"
            style={{
              alignSelf:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "stretch"
                  : undefined,
              fontSize:
                screenWidth < 744
                  ? "20px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "48px"
                    : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "-1.00px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "-2.40px"
                    : undefined,
              lineHeight:
                screenWidth < 744
                  ? "20px"
                  : screenWidth >= 1728 ||
                      (screenWidth >= 744 && screenWidth < 1728)
                    ? "48px"
                    : undefined,
              marginRight: screenWidth >= 1728 ? "-3.00px" : undefined,
              width: screenWidth >= 1728 ? "1531px" : undefined,
            }}
          >
            That is it: there is no fine print, no hidden fees, no magic tricks.
            We’re here to redefine independence by making wealth-building
            accessible to everyone.
          </p>
        </div>

        <div
          className="frame-28"
          style={{
            gap:
              (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                ? "24px"
                : screenWidth >= 1728
                  ? "32px"
                  : undefined,
          }}
        >
          <div
            className="frame-29"
            style={{
              alignSelf:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "stretch"
                  : undefined,
              display:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "flex"
                  : screenWidth >= 1728
                    ? "inline-flex"
                    : undefined,
              gap:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "8px"
                  : screenWidth >= 1728
                    ? "16px"
                    : undefined,
              marginRight: screenWidth >= 1728 ? "-3.00px" : undefined,
              width:
                (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                  ? "100%"
                  : undefined,
            }}
          >
            <div
              className="frame-30"
              style={{
                alignSelf:
                  (screenWidth >= 744 && screenWidth < 1728) ||
                  screenWidth < 744
                    ? "stretch"
                    : undefined,
                gap:
                  screenWidth < 744
                    ? "4px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "8px"
                      : screenWidth >= 1728
                        ? "16px"
                        : undefined,
                width:
                  (screenWidth >= 744 && screenWidth < 1728) ||
                  screenWidth < 744
                    ? "100%"
                    : screenWidth >= 1728
                      ? "1531px"
                      : undefined,
              }}
            >
              <div
                className="text-wrapper-43"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "24px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "48px"
                        : screenWidth >= 1728
                          ? "110px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "24px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "48px"
                        : screenWidth >= 1728
                          ? "110px"
                          : undefined,
                }}
              >
                End‑to‑End Encryption
              </div>

              <div
                className="text-wrapper-44"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "24px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "48px"
                        : screenWidth >= 1728
                          ? "110px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "24px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "48px"
                        : screenWidth >= 1728
                          ? "110px"
                          : undefined,
                }}
              >
                Open‑Source Code
              </div>

              <div
                className="text-wrapper-45"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "24px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "48px"
                        : screenWidth >= 1728
                          ? "110px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "24px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "48px"
                        : screenWidth >= 1728
                          ? "110px"
                          : undefined,
                }}
              >
                Zero‑Knowledge Security
              </div>

              <div
                className="trustless-system"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "24px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "48px"
                        : screenWidth >= 1728
                          ? "110px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "24px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "48px"
                        : screenWidth >= 1728
                          ? "110px"
                          : undefined,
                }}
              >
                {((screenWidth >= 744 && screenWidth < 1728) ||
                  screenWidth < 744) && <>Trustless System Design</>}

                {screenWidth >= 1728 && <>Trustless System</>}
              </div>
            </div>

            <p
              className="text-wrapper-46"
              style={{
                alignSelf:
                  (screenWidth >= 744 && screenWidth < 1728) ||
                  screenWidth < 744
                    ? "stretch"
                    : undefined,
                fontSize:
                  screenWidth < 744
                    ? "14px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "16px"
                      : screenWidth >= 1728
                        ? "24px"
                        : undefined,
                letterSpacing:
                  screenWidth < 744
                    ? "-0.70px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-0.80px"
                      : screenWidth >= 1728
                        ? "-1.20px"
                        : undefined,
                lineHeight:
                  screenWidth < 744
                    ? "14px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "16px"
                      : screenWidth >= 1728
                        ? "24px"
                        : undefined,
                width: screenWidth >= 1728 ? "1529px" : undefined,
              }}
            >
              It is not for debate: we do not take any chances when it comes to
              your money. What does it mean? You control the keys. Our code is
              auditable. We cannot read your data. Security relies on math and
              open scrutiny, not any corporate promise.
            </p>
          </div>

          <div
            className="frame-31"
            style={{
              padding:
                screenWidth < 744
                  ? "20px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "24px"
                    : screenWidth >= 1728
                      ? "32px"
                      : undefined,
            }}
          >
            <div className="frame-18">
              <div
                className="text-wrapper-47"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "14px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "16px"
                        : screenWidth >= 1728
                          ? "20px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.70px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.80px"
                        : screenWidth >= 1728
                          ? "-1.00px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "14px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "16px"
                        : screenWidth >= 1728
                          ? "20px"
                          : undefined,
                }}
              >
                What it means:
              </div>

              <p
                className="text-wrapper-48"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "12px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "14px"
                        : screenWidth >= 1728
                          ? "16px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.60px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.70px"
                        : screenWidth >= 1728
                          ? "-0.80px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "12px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "14px"
                        : screenWidth >= 1728
                          ? "16px"
                          : undefined,
                }}
              >
                Your message leaves your phone already locked and is only
                unlocked on your friend’s phone.
              </p>
            </div>

            <img
              className="line"
              alt="Line"
              src={
                screenWidth < 744
                  ? "/img/line-2-2.png"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "/img/line-2-3.png"
                    : screenWidth >= 1728
                      ? "/img/line-2-1.png"
                      : undefined
              }
            />

            <div className="frame-18">
              <div
                className="text-wrapper-49"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "14px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "16px"
                        : screenWidth >= 1728
                          ? "20px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.70px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.80px"
                        : screenWidth >= 1728
                          ? "-1.00px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "14px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "16px"
                        : screenWidth >= 1728
                          ? "20px"
                          : undefined,
                }}
              >
                Why you care:
              </div>

              <p
                className="text-wrapper-50"
                style={{
                  fontSize:
                    screenWidth < 744
                      ? "12px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "14px"
                        : screenWidth >= 1728
                          ? "16px"
                          : undefined,
                  letterSpacing:
                    screenWidth < 744
                      ? "-0.60px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "-0.70px"
                        : screenWidth >= 1728
                          ? "-0.80px"
                          : undefined,
                  lineHeight:
                    screenWidth < 744
                      ? "12px"
                      : screenWidth >= 744 && screenWidth < 1728
                        ? "14px"
                        : screenWidth >= 1728
                          ? "16px"
                          : undefined,
                }}
              >
                No one in-between—apps, servers, Wi-Fi, governments—can peek or
                change it.
              </p>
            </div>
          </div>
        </div>

        <div
          className="frame-32"
          style={{
            flex:
              (screenWidth >= 744 && screenWidth < 1728) || screenWidth < 744
                ? "0 0 auto"
                : undefined,
            height: screenWidth >= 1728 ? "600px" : undefined,
            padding:
              screenWidth < 744
                ? "40px 20px"
                : screenWidth >= 744 && screenWidth < 1728
                  ? "60px 0px"
                  : screenWidth >= 1728
                    ? "100px 0px"
                    : undefined,
          }}
        >
          <div
            className="text-wrapper-51"
            style={{
              fontSize:
                screenWidth < 744
                  ? "80px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "150px"
                    : screenWidth >= 1728
                      ? "400px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "80px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "150px"
                    : screenWidth >= 1728
                      ? "400px"
                      : undefined,
            }}
          >
            Join ↗
          </div>
        </div>

        <div className="frame-33">
          <div
            className="text-wrapper-52"
            style={{
              fontSize:
                screenWidth >= 1728
                  ? "96px"
                  : screenWidth < 744
                    ? "48px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "64px"
                      : undefined,
              letterSpacing:
                screenWidth >= 1728
                  ? "-4.80px"
                  : screenWidth < 744
                    ? "-2.40px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "-3.20px"
                      : undefined,
              lineHeight:
                screenWidth >= 1728
                  ? "96px"
                  : screenWidth < 744
                    ? "48px"
                    : screenWidth >= 744 && screenWidth < 1728
                      ? "64px"
                      : undefined,
            }}
          >
            FAQ
          </div>

          <div
            className="what-is-lano-what"
            style={{
              fontSize:
                screenWidth < 744
                  ? "16px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "24px"
                    : screenWidth >= 1728
                      ? "48px"
                      : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "-0.80px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "-1.20px"
                    : screenWidth >= 1728
                      ? "-2.40px"
                      : undefined,
              lineHeight:
                screenWidth < 744
                  ? "16px"
                  : screenWidth >= 744 && screenWidth < 1728
                    ? "24px"
                    : screenWidth >= 1728
                      ? "48px"
                      : undefined,
            }}
          >
            {((screenWidth >= 744 && screenWidth < 1728) ||
              screenWidth < 744) && (
              <p className="text-wrapper-57">
                What is Lano?
                <br />
                What can I do with Lano?
                <br />
                Is Lano already available?
                <br />
                Why should I use Lano?
                <br />
                How is my money protected?
                <br />
                What happens if I lose my phone or the encryption keys?
                <br />
                Does Lano charge any fees?
                <br />
                Can I move my money out instantly and free of charge?
                <br />
                How does Lano keep my data private if it’s using Artificial
                Intelligence?
                <br />
                How does Lano make money?
                <br />
                Who is behind Lano?
                <br />
                Who has invested on Lano?
              </p>
            )}

            {screenWidth >= 1728 && (
              <>
                <p className="span-wrapper">
                  <span className="text-wrapper-53">
                    1. What is Lano?
                    <br />
                    2. What can I do with Lano?
                    <br />
                    3. Is Lano already available?
                    <br />
                    4. Why should I use Lano?
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="text-wrapper-54">
                    5. How is my money protected?
                  </span>
                </p>
              </>
            )}
          </div>

          {screenWidth >= 1728 && (
            <>
              <div className="frame-34">
                <p className="text-wrapper-55">
                  Fondos en bancos asociados asegurados por el FDIC (hasta US$
                  250 000 por usuario) y datos encriptados de extremo a extremo
                </p>
              </div>

              <p className="element-what-is-lano">
                6. What is Lano?
                <br />
                7. What can I do with Lano?
                <br />
                8. Is Lano already available?
                <br />
                9. Why should I use Lano?
                <br />
                10. How is my money protected?
                <br />
                11. What happens if I lose my phone or the encryption keys?
                <br />
                12. Does Lano charge any fees?
                <br />
                13. Can I move my money out instantly and free of charge?
                <br />
                14. How does Lano keep my data private if it’s using Artificial
                Intelligence?
                <br />
                15. How does Lano make money?
                <br />
                16. Who is behind Lano?
                <br />
                17. Who has invested on Lano?
              </p>
            </>
          )}
        </div>
      </div>

      <div
        className="frame-wrapper"
        style={{
          alignSelf: "stretch",
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
          width: "100%",
        }}
      >
        <div
          className="frame-35"
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
            className="text-wrapper-56"
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
              <p className="text-wrapper-57">
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
              <p className="text-wrapper-57">
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
