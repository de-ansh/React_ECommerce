import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white  text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-6" variant="h6">
            COMPANY
          </Typography>

          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              Career
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              Partner
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-6" variant="h6">
            SOLUTION
          </Typography>

          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              MARKETING{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              ANALYSE
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              COMMERCE
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              INSIGHTS
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              SUPPORT
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-6" variant="h6">
            DOCUMENTATION
          </Typography>

          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              GUIDES
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              API STATUS
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-6" variant="h6">
            LEGAL
          </Typography>

          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              CLAIM
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              PRIVACY
            </Button>
          </div>
          <div>
            <Button className="pb-6" variant="h6" gutterButton>
              TERMS
            </Button>
          </div>
        </Grid>
        
                <Grid className="pt-20 " item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 My Company. All rights reserved. 
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                       MADE WITH LOVE BY ME. 
                    </Typography>

                    <Typography variant="body2" component="p" align="center">
                        Icons Made BY {' '}
                        <Link href = "https://www.freepik.com" color="inherit" underline="always"> FREEPIK</Link> {' '} from {' '}
                        <Link href = "https://www.flaticon.com" color="inherit" underline="always"> www.flaticon.com</Link>
                    </Typography>


                </Grid>
            </Grid>
     
    </div>
  );
};

export default Footer;
