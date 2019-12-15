import styled, { css } from "styled-components";

/**
 * Create column
 * @param value
 * @returns {string[]}
 */
export function handleGrid(value) {
  if (!value) return;
  let width = (value / 12) * 100;
  return css`
    flex: 0 0 ${width}%;
    max-width: ${width}%;
  `;
}

/**
 *
 * @param type
 * @returns {[]|null|string|*}
 */
export function handleContainer(type) {
  if (!type) return;
  switch (type) {
    case "fluidSM":
      return css`
        @media (max-width: 576px) {
          max-width: 540px;
        }

        @media (min-width: 768px) {
          max-width: 720px;
        }

        @media (min-width: 992px) {
          max-width: 960px;
        }

        @media (min-width: 1200px) {
          max-width: 1140px;
        }
      `;

    case "fluidMD":
      return css`
        @media (max-width: 576px) {
          max-width: 100%;
        }

        @media (min-width: 768px) {
          max-width: 720px;
        }

        @media (min-width: 992px) {
          max-width: 960px;
        }

        @media (min-width: 1200px) {
          max-width: 1140px;
        }
      `;

    case "fluidLG":
      return css`
        @media (max-width: 576px) {
          max-width: 100%;
        }

        @media (min-width: 768px) {
          max-width: 100%;
        }

        @media (min-width: 992px) {
          max-width: 960px;
        }

        @media (min-width: 1200px) {
          max-width: 1140px;
        }
      `;

    case "fluidXL":
      return css`
        @media (max-width: 576px) {
          max-width: 100%;
        }

        @media (min-width: 768px) {
          max-width: 100%;
        }

        @media (min-width: 992px) {
          max-width: 100%;
        }

        @media (min-width: 1200px) {
          max-width: 1140px;
        }
      `;

    case "fluid":
      return css`
        max-width: 100%;
      `;

    default:
      break;
  }
}

// Default container
export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  ${({ type }) =>
    type
      ? handleContainer(type)
      : css`
          @media (max-width: 576px) {
            max-width: 540px;
          }

          @media (min-width: 768px) {
            max-width: 720px;
          }

          @media (min-width: 992px) {
            max-width: 960px;
          }

          @media (min-width: 1200px) {
            max-width: 1140px;
          }
        `}
`;

// create Row's
export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

// the column
export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    ${({ mobile }) => mobile && handleGrid(mobile)}
  }

  @media (min-width: 768px) {
    ${({ tablet }) => tablet && handleGrid(tablet)}
  }

  @media (min-width: 992px) {
    ${({ large }) => large && handleGrid(large)}
  }

  @media (min-width: 1200px) {
    ${({ desktop }) => desktop && handleGrid(desktop)}
  }
`;
