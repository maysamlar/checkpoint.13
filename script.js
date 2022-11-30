
 
function sort(tab) {
    
    var len = tab.length;       
    var tmp, i, j;                  
    
    for(i = 1; i < len; i++) {
     
      tmp = tab[i]
      j = i - 1
      while (j >= 0 && tab[j] > tmp) {
    
        tab[j+1] = tab[j]
        j--
      }
    
      tab[j+1] = tmp
    }
    return tab
  }
  var tab = [5, 8, 11, 6, 1, 9, 3];
  sort(tab);
  console.log(tab);