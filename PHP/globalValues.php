<?php
  class RubikCube {
    private $faces;

    function __construct($faces) {
      $this->faces = json_decode($faces, true);
    }

    function get_faces() {
      return $this->faces;
    }
  }

  print_r($rb1->get_faces());
?>