import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogTitle, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function Modal({ handleClickOpen, handleClose, handleSubmit, open, openModalButton, category, handleDate, handleWord, handleCategory }) {


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {openModalButton}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Sort news</DialogTitle>
                <DialogContent>
                    <DialogContentText>
            If you want sort news by word, date and category, please fill form
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="word"
                        label="Key word"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onChange={handleWord}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label={"Search data published last month"}
                        type="text"
                        placeholder='yyyy-mm-dd'
                        variant="standard"
                        fullWidth
                        required
                        onChange={handleDate}
                    />
                    <FormControl fullWidth sx={{ marginTop: 1 } }>
                        <InputLabel required id="demo-simple-select-label">Select category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="category"
                            value={category}
                            label="Category"
                            onChange={handleCategory}
                            
                        >
                            <MenuItem value={"general"}>General</MenuItem>
                            <MenuItem value={"business"}>Business</MenuItem>
                            <MenuItem value={"sports"}>Sports</MenuItem>
                            <MenuItem value={"science"}>Science</MenuItem>
                            <MenuItem value={"health"}>Health</MenuItem>
                            <MenuItem value={"technology"}>Technology</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
