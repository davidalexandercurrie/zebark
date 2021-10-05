#! /usr/bin/env node
const { exec } = require('child_process');
let count = 0;

let img = `&&&&&&&&&&&&&&&%              ....*/(((((((***,.                  &&&&&&&&&&&&&&
  &&&&&&&&&&&&%                ..****//,,.............                 &&&&&&&&&&&
  &&&&&&&&&&,                ............................                /&&&&&&&&
  &&&&&&&&.               ........,(%&&&&&&&&&&&&&&(...                    *&&&&&&
  &&&&&&*                   ...*&&&%./,%&&&&(#&&/&&&&(..                     #&&&&
  &&&&&                      .*%&&&&&&&&&&&&&&&&&&&&&&%..                      &&&
  &&&%     (..              ..%&&&&&%.%,&&&&&...%&&&&&&#..                      %&
  &&#    ,#,%&*..##.        ..%%&&&&&&%&&(#&&&&&&&&&&&&&&..                      %
  &%    ,*/%&%&/,%%.       .*%%%&&&&&&&&#,%&&&&&&&&&&&&&&&#..                     
  &     ,#%&#&*#&&%...    ..%%%&&&&&&&&&,*#%#*#&&&.&&&&&&&&#..                    
  *       .,%&&&&&/..*..  .,%%%&&&&&,#&&&&&&&&&&%.%&&&&&&&(....                   
            ......,*///*,...#%%&&&&&&%../%&&&(,.*&&&&&&*...,,.*...                
               ..*////////*.....,#&&&&&&%%##%%%%&&&(. /@..***.,/*..               
                ..,*//////*.**,./@#. ..*%&&&&&&/..*@@@* *****.,*/*..              
                  ..*/////*.,/*/*..(@@@@@&*....%@@@@*.*/*.,,,,*//*,...            
                    ..*////*.....*/*..*@@.(.,,.#./..**//*.**////**/*,,.. .        
                      ..,*//****..*///**..(/,,,.../****/*.*///,,,.#&&&&&%%%,.     
                        .. ,*****.***...........,,,,,,,,..*///*..%&&**.*&(.       
                            ..**/,..,,*/***,..**/////////**///*.....,*%&#/&&*     
                             .,///*//////**..**..//////////.              .*      
                             ..*///////////.,//*/////////       *////*            
                              .*//////////*,.**..*/////*     ////////////         
                              ..*///////////,.*/***////     ////      ////        
                               .**/////////*/*..***/***     ///,      ,///        
                                ..................., (%     *////, .,////*        
                                    ..#/ &%.(#.. .,%, &#      ,////////,          
                                    ..#/ &&./#.. ..%#.(&*.                        
                                    .. .........  ...                             `;

let lines = img.split('\n');

setInterval(() => {
  console.clear();
  lines.forEach((element, index) => {
    let char = element.charAt(0);
    lines[index] = element.substr(1, element.length) + char;
    console.log(lines[index] + lines[index]);
  });
  lines.forEach((element, index) => {
    let char = element.charAt(0);
    lines[index] = element.substr(1, element.length) + char;
    console.log(lines[index] + lines[index]);
  });
}, 50);

// setInterval(() => {
//   console.clear();
//   if (count % 2 === 0) {
//     console.log(`
// &&&&&&&&&&&&&&&%              ....*/(((((((***,.                  &&&&&&&&&&&&&&
//   &&&&&&&&&&&&%                ..****//,,.............                 &&&&&&&&&&&
//   &&&&&&&&&&,                ............................                /&&&&&&&&
//   &&&&&&&&.               ........,(%&&&&&&&&&&&&&&(...                    *&&&&&&
//   &&&&&&*                   ...*&&&%./,%&&&&(#&&/&&&&(..                     #&&&&
//   &&&&&                      .*%&&&&&&&&&&&&&&&&&&&&&&%..                      &&&
//   &&&%     (..              ..%&&&&&%.%,&&&&&...%&&&&&&#..                      %&
//   &&#    ,#,%&*..##.        ..%%&&&&&&%&&(#&&&&&&&&&&&&&&..                      %
//   &%    ,*/%&%&/,%%.       .*%%%&&&&&&&&#,%&&&&&&&&&&&&&&&#..
//   &     ,#%&#&*#&&%...    ..%%%&&&&&&&&&,*#%#*#&&&.&&&&&&&&#..
//   *       .,%&&&&&/..*..  .,%%%&&&&&,#&&&&&&&&&&%.%&&&&&&&(....
//             ......,*///*,...#%%&&&&&&%../%&&&(,.*&&&&&&*...,,.*...
//                ..*////////*.....,#&&&&&&%%##%%%%&&&(. /@..***.,/*..
//                 ..,*//////*.**,./@#. ..*%&&&&&&/..*@@@* *****.,*/*..
//                   ..*/////*.,/*/*..(@@@@@&*....%@@@@*.*/*.,,,,*//*,...
//                     ..*////*.....*/*..*@@.(.,,.#./..**//*.**////**/*,,.. .
//                       ..,*//****..*///**..(/,,,.../****/*.*///,,,.#&&&&&%%%,.
//                         .. ,*****.***...........,,,,,,,,..*///*..%&&**.*&(.
//                             ..**/,..,,*/***,..**/////////**///*.....,*%&#/&&*
//                              .,///*//////**..**..//////////.              .*
//                              ..*///////////.,//*/////////       *////*
//                               .*//////////*,.**..*/////*     ////////////
//                               ..*///////////,.*/***////     ////      ////
//                                .**/////////*/*..***/***     ///,      ,///
//                                 ..................., (%     *////, .,////*
//                                     ..#/ &%.(#.. .,%, &#      ,////////,
//                                     ..#/ &&./#.. ..%#.(&*.
//                                     .. .........  ...
// `);
//   } else {
//     console.log(`
//   &&&&&&&&&&&&&%              ....*/(((((((***,.                  &&&&&&&&&&&&&&
//   &&&&&&&&&&%                ..****//,,.............                 &&&&&&&&&&&
//   &&&&&&&&,                ............................                /&&&&&&&&
//   &&&&&&.               ........,(%&&&&&&&&&&&&&&(...                    *&&&&&&
//   &&&&*                   ...*&&&%./,%&&&&(#&&/&&&&(..                     #&&&&
//   &&&                      .*%&&&&&&&&&&&&&&&&&&&&&&%..                      &&&
//   &%     (..              ..%&&&&&%.%,&&&&&...%&&&&&&#..                      %&
//   #    ,#,%&*..##.        ..%%&&&&&&%&&(#&&&&&&&&&&&&&&..                      %
//       ,*/%&%&/,%%.       .*%%%&&&&&&&&#,%&&&&&&&&&&&&&&&#..
//       ,#%&#&*#&&%...    ..%%%&&&&&&&&&,*#%#*#&&&.&&&&&&&&#..
//         .,%&&&&&/..*..  .,%%%&&&&&,#&&&&&&&&&&%.%&&&&&&&(....
//           ......,*///*,...#%%&&&&&&%../%&&&(,.*&&&&&&*...,,.*...
//              ..*////////*.....,#&&&&&&%%##%%%%&&&(. /@..***.,/*..
//               ..,*//////*.**,./@#. ..*%&&&&&&/..*@@@* *****.,*/*..
//                 ..*/////*.,/*/*..(@@@@@&*....%@@@@*.*/*.,,,,*//*,...
//                   ..*////*.....*/*..*@@.(.,,.#./..**//*.**////**/*,,.. .
//                     ..,*//****..*///**..(/,,,.../****/*.*///,,,.#&&&&&%%%,.
//                       .. ,*****.***...........,,,,,,,,..*///*..%&&**.*&(.
//                             ..**/,..,,*/***,..**/////////**///*.....,*%&#/&&*
//                              .,///*//////**..**..//////////.              .*
//                              ..*///////////.,//*/////////       *////*
//                               .*//////////*,.**..*/////*     ////////////
//                               ..*///////////,.*/***////     ////      ////
//                                .**/////////*/*..***/***     ///,      ,///
//                                 ..................., (%     *////, .,////*
//                                       ..#/ &%.(#.. .,%, &#      ,////////,
//                                       ..#/ &&./#.. ..%#.(&*.
//                                       .. .........  ...
// `);
//   }
//   count++;
// }, 250);
