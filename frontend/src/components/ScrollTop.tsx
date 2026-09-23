import { useScrollTrigger, Fade, Box, Fab } from "@mui/material";
import { scrollToTop } from "../utils";
import { colors } from "../theme";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export const ScrollTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  
  return (
    <Fade in={trigger}>
      <Box
        onClick={scrollToTop}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 2 }}
      >
        <Fab
          size="small"
          aria-label="Scroll back to top"
          sx={{
            backgroundColor: colors.sea,
            color: colors.white,
            '&:hover': { backgroundColor: colors.seaDark },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
}
