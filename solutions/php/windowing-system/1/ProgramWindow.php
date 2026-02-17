<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $height;
    public $width;
    
    function __construct($x = 0, $y = 0, $height = 600, $width = 800){
        $this->x = $x;
        $this->y = $y;
        $this->height = $height;
        $this->width = $width;
    }

    function resize($size){
        $this->height = $size->height;
        $this->width = $size->width;
    }

    function move($position){
        $this->y = $position->y;
        $this->x = $position->x;
    }
}
