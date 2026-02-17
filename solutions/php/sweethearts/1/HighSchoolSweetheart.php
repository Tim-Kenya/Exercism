<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        // Takes a name, trims whitespaces and returns its first letter as it is
        return trim($name)[0];
    }

    public function initial(string $name): string
    {
        // Takes a name and returns its first letter, uppercase, followed by a dot
        return strtoupper($this->firstLetter($name)) . ".";
    }

    public function initials(string $name): string
    {
        // Takes a full name, consisting of a first name and a last name separated by a space, and return the initials
        $names = explode(" ", $name);
        $initials = "";
        
        foreach($names as $part){
            $initials .= $this->initial($part) . " ";
        }
        return trim($initials);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        // Takes two full names and returns the initials inside
        $initialsA = $this->initials($sweetheart_a);
        $initialsB = $this->initials($sweetheart_b);
        $label = "{$initialsA}  +  {$initialsB}";

        return <<<EXPECTED_HEART
         ******       ******
       **      **   **      **
     **         ** **         **
    **            *            **
    **                         **
    **     {$label}     **
     **                       **
       **                   **
         **               **
           **           **
             **       **
               **   **
                 ***
                  *
    EXPECTED_HEART;
    }
}
