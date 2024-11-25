// const videoContainer = document.getElementById('video-container');

// async function grabVideoIds() {
//   const videoIds = await getPlaylistVideoIds();
//   return videoIds;
// }

// grabVideoIds().then(videoIds => {
//   appendVideoPlayers(videoIds, videoContainer);
// });




// async function getPlaylistVideoIds() {
//   const ids = [];
//   const response = await fetch(
//     `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLGaeK8szXiDUMKpOxbEnSVKbVKHg6XZwG&key=AIzaSyA6xXpqDq-NcTWirKYe9hip4d-FQf2QkQM&part=contentDetails&maxResults=50`
//   );
//   const data = await response.json();
//     if (data.items && Array.isArray(data.items)) {
//         data.items.forEach(item => {
//             if (item.id) {
//                 ids.push(item.contentDetails.videoId);
//             }
//         });
//     }
//     return ids;
// }


// async function appendVideoPlayers(ids, videoContainer) {
//   for (const id of ids) {
//     const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA6xXpqDq-NcTWirKYe9hip4d-FQf2QkQM&part=player&id=${id}`);
//     const data = await response.json();

//     videoContainer.innerHTML += data.items[0].player.embedHtml
  
//   }
// }


// async function getPlaylistId() {
//   const response = await fetch(
//     `https://www.googleapis.com/youtube/v3/playlists?part=id,contentDetails&channelId=UCpbO_ooq-dBj1EA-pspXc0g&key=AIzaSyA6xXpqDq-NcTWirKYe9hip4d-FQf2QkQM`
//   );
//   const data = await response.json();
//   console.log(data);
//   playlistId = data.items[0].id; 
//   return playlistId;
// }

// getPlaylistId().then(() => {
//   console.log(playlistId);
// });

// {
//   "kind": "youtube#video",
//   "etag": etag,
//   "id": string,
//   "snippet": {
//     "publishedAt": datetime,
//     "channelId": string,
//     "title": string,
//     "description": string,
//     "thumbnails": {
//       (key): {
//         "url": string,
//         "width": unsigned integer,
//         "height": unsigned integer
//       }
//     },
//     "channelTitle": string,
//     "tags": [
//       string
//     ],
//     "categoryId": string,
//     "liveBroadcastContent": string,
//     "defaultLanguage": string,
//     "localized": {
//       "title": string,
//       "description": string
//     },
//     "defaultAudioLanguage": string
//   },
//   "contentDetails": {
//     "duration": string,
//     "dimension": string,
//     "definition": string,
//     "caption": string,
//     "licensedContent": boolean,
//     "regionRestriction": {
//       "allowed": [
//         string
//       ],
//       "blocked": [
//         string
//       ]
//     },
//     "contentRating": {
//       "acbRating": string,
//       "agcomRating": string,
//       "anatelRating": string,
//       "bbfcRating": string,
//       "bfvcRating": string,
//       "bmukkRating": string,
//       "catvRating": string,
//       "catvfrRating": string,
//       "cbfcRating": string,
//       "cccRating": string,
//       "cceRating": string,
//       "chfilmRating": string,
//       "chvrsRating": string,
//       "cicfRating": string,
//       "cnaRating": string,
//       "cncRating": string,
//       "csaRating": string,
//       "cscfRating": string,
//       "czfilmRating": string,
//       "djctqRating": string,
//       "djctqRatingReasons": [,
//         string
//       ],
//       "ecbmctRating": string,
//       "eefilmRating": string,
//       "egfilmRating": string,
//       "eirinRating": string,
//       "fcbmRating": string,
//       "fcoRating": string,
//       "fmocRating": string,
//       "fpbRating": string,
//       "fpbRatingReasons": [,
//         string
//       ],
//       "fskRating": string,
//       "grfilmRating": string,
//       "icaaRating": string,
//       "ifcoRating": string,
//       "ilfilmRating": string,
//       "incaaRating": string,
//       "kfcbRating": string,
//       "kijkwijzerRating": string,
//       "kmrbRating": string,
//       "lsfRating": string,
//       "mccaaRating": string,
//       "mccypRating": string,
//       "mcstRating": string,
//       "mdaRating": string,
//       "medietilsynetRating": string,
//       "mekuRating": string,
//       "mibacRating": string,
//       "mocRating": string,
//       "moctwRating": string,
//       "mpaaRating": string,
//       "mpaatRating": string,
//       "mtrcbRating": string,
//       "nbcRating": string,
//       "nbcplRating": string,
//       "nfrcRating": string,
//       "nfvcbRating": string,
//       "nkclvRating": string,
//       "oflcRating": string,
//       "pefilmRating": string,
//       "rcnofRating": string,
//       "resorteviolenciaRating": string,
//       "rtcRating": string,
//       "rteRating": string,
//       "russiaRating": string,
//       "skfilmRating": string,
//       "smaisRating": string,
//       "smsaRating": string,
//       "tvpgRating": string,
//       "ytRating": string
//     },
//     "projection": string,
//     "hasCustomThumbnail": boolean
//   },
//   "status": {
//     "uploadStatus": string,
//     "failureReason": string,
//     "rejectionReason": string,
//     "privacyStatus": string,
//     "publishAt": datetime,
//     "license": string,
//     "embeddable": boolean,
//     "publicStatsViewable": boolean,
//     "madeForKids": boolean,
//     "selfDeclaredMadeForKids": boolean,
//     "containsSyntheticMedia": boolean
//   },
//   "statistics": {
//     "viewCount": string,
//     "likeCount": string,
//     "dislikeCount": string,
//     "favoriteCount": string,
//     "commentCount": string
//   },
//   "paidProductPlacementDetails": {
//     "hasPaidProductPlacement": boolean
//   },
//   "player": {
//     "embedHtml": string,
//     "embedHeight": long,
//     "embedWidth": long
//   },
//   "topicDetails": {
//     "topicIds": [
//       string
//     ],
//     "relevantTopicIds": [
//       string
//     ],
//     "topicCategories": [
//       string
//     ]
//   },
//   "recordingDetails": {
//     "recordingDate": datetime
//   },
//   "fileDetails": {
//     "fileName": string,
//     "fileSize": unsigned long,
//     "fileType": string,
//     "container": string,
//     "videoStreams": [
//       {
//         "widthPixels": unsigned integer,
//         "heightPixels": unsigned integer,
//         "frameRateFps": double,
//         "aspectRatio": double,
//         "codec": string,
//         "bitrateBps": unsigned long,
//         "rotation": string,
//         "vendor": string
//       }
//     ],
//     "audioStreams": [
//       {
//         "channelCount": unsigned integer,
//         "codec": string,
//         "bitrateBps": unsigned long,
//         "vendor": string
//       }
//     ],
//     "durationMs": unsigned long,
//     "bitrateBps": unsigned long,
//     "creationTime": string
//   },
//   "processingDetails": {
//     "processingStatus": string,
//     "processingProgress": {
//       "partsTotal": unsigned long,
//       "partsProcessed": unsigned long,
//       "timeLeftMs": unsigned long
//     },
//     "processingFailureReason": string,
//     "fileDetailsAvailability": string,
//     "processingIssuesAvailability": string,
//     "tagSuggestionsAvailability": string,
//     "editorSuggestionsAvailability": string,
//     "thumbnailsAvailability": string
//   },
//   "suggestions": {
//     "processingErrors": [
//       string
//     ],
//     "processingWarnings": [
//       string
//     ],
//     "processingHints": [
//       string
//     ],
//     "tagSuggestions": [
//       {
//         "tag": string,
//         "categoryRestricts": [
//           string
//         ]
//       }
//     ],
//     "editorSuggestions": [
//       string
//     ]
//   },
//   "liveStreamingDetails": {
//     "actualStartTime": datetime,
//     "actualEndTime": datetime,
//     "scheduledStartTime": datetime,
//     "scheduledEndTime": datetime,
//     "concurrentViewers": unsigned long,
//     "activeLiveChatId": string
//   },
//   "localizations": {
//     (key): {
//       "title": string,
//       "description": string
//     }
//   }
// }


