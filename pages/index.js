import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { getCookie, setCookie } from 'cookies-next';

const allRhymingSets = [
  ['cat', 'hat', 'bat'],
  ['moon', 'June', 'tune'],
  ['light', 'bright', 'sight'],
  ['dance', 'chance', 'glance'],
  ['sky', 'fly', 'high'],
  ['rain', 'pain', 'gain'],
  ['dream', 'cream', 'stream'],
  ['fire', 'wire', 'tire'],
  ['beat', 'heat', 'seat'],
  ['night', 'fight', 'tight'],
['brand', 'strand', 'grand'],
['glove', 'dove', 'love'],
['star', 'car', 'far'],
['light', 'kite', 'bite'],
['flew', 'glue', 'new'],
['bear', 'share', 'care'],
['main', 'pain', 'gain'],
['green', 'seen', 'lean'],
['fall', 'call', 'mall'],
['heart', 'part', 'start'],
['blind', 'kind', 'mind'],
['song', 'strong', 'long'],
['wish', 'fish', 'dish'],
['quick', 'stick', 'pick'],
['shine', 'line', 'pine'],
['bag', 'tag', 'wag'],
['tree', 'free', 'key'],
['cool', 'rule', 'pool'],
['dream', 'beam', 'scream'],
['bread', 'led', 'said'],
['horse', 'course', 'source'],
['string', 'wing', 'thing'],
['foot', 'put', 'hut'],
['swing', 'sing', 'king'],
['toy', 'boy', 'joy'],
['band', 'hand', 'land'],
['price', 'dice', 'twice'],
['rose', 'nose', 'close'],
['stack', 'track', 'lack'],
['blame', 'same', 'game'],
['fold', 'gold', 'told'],
['far', 'star', 'bar'],
['sing', 'ring', 'spring'],
['chair', 'lair', 'glare'],
['moon', 'spoon', 'soon'],
['fleet', 'meet', 'sheet'],
['tight', 'height', 'might'],
['bold', 'cold', 'sold'],
['ripe', 'hype', 'type'],
['vase', 'case', 'base'],
['mile', 'pile', 'file'],
['twist', 'mist', 'list'],
['night', 'flight', 'tight'],
['blink', 'think', 'sink'],
['flag', 'drag', 'stag'],
['gaze', 'blaze', 'raise'],
['drum', 'hum', 'plum'],
['zone', 'bone', 'tone'],
['ring', 'sing', 'spring'],
['fire', 'wire', 'tire'],
['duck', 'muck', 'truck'],
['shell', 'smell', 'tell'],
['bold', 'hold', 'fold'],
['best', 'nest', 'chest'],
['flash', 'clash', 'stash'],
['deep', 'sleep', 'keep'],
['car', 'jar', 'star'],
['dice', 'spice', 'nice'],
['lamp', 'damp', 'camp'],
['gate', 'late', 'mate'],
['song', 'wrong', 'long'],
['plate', 'state', 'mate'],
['trick', 'sick', 'kick'],
['heap', 'peep', 'keep'],
['stump', 'jump', 'bump'],
['date', 'mate', 'plate'],
['air', 'bear', 'hair'],
['globe', 'probe', 'robe'],
['twin', 'win', 'fin'],
['glow', 'flow', 'snow'],
['creep', 'sleep', 'sweep'],
['pain', 'main', 'rain'],
['ball', 'tall', 'hall'],
['pit', 'sit', 'hit'],
['blink', 'link', 'think'],
['band', 'sand', 'hand'],
['brick', 'quick', 'pick'],
['deer', 'near', 'fear'],
['cue', 'few', 'view'],
['mount', 'count', 'fount'],
['hat', 'flat', 'pat'],
['dream', 'team', 'beam'],
['faint', 'paint', 'taint'],
['dare', 'flare', 'share'],
['mute', 'suit', 'loot'],
['wink', 'sink', 'link'],
['band', 'stand', 'land'],
['file', 'smile', 'pile'],
['craft', 'draft', 'shaft'],
['soft', 'loft', 'caught'],
['prime', 'lime', 'time'],
['class', 'glass', 'pass'],
['weep', 'keep', 'leap'],
['glow', 'show', 'flow'],
['raid', 'laid', 'maid'],
['hire', 'tire', 'wire'],
['chip', 'sip', 'tip'],
['mask', 'task', 'bask'],
['hunt', 'front', 'blunt'],
['brood', 'mood', 'food'],
['trill', 'still', 'will'],
['pray', 'stay', 'day'],
['fence', 'dense', 'sense'],
['dive', 'hive', 'live'],
['claim', 'blame', 'frame'],
['yard', 'card', 'guard'],
['call', 'hall', 'tall'],
['blink', 'think', 'sink'],
['hat', 'flat', 'mat'],
['white', 'light', 'sight'],
['rest', 'test', 'best'],
['roast', 'toast', 'boast'],
['joke', 'yolk', 'folk'],
['far', 'bar', 'star'],
['wild', 'child', 'mild'],
['curb', 'herb', 'verb'],
['dice', 'spice', 'nice'],
['drum', 'hum', 'bum'],
['tree', 'bee', 'see'],
['dive', 'hive', 'live'],
['grace', 'place', 'face'],
['bind', 'find', 'mind'],
['kite', 'bite', 'light'],
['rope', 'hope', 'scope'],
['deal', 'feel', 'seal'],
['drain', 'grain', 'brain'],
['fair', 'stare', 'care'],
['cave', 'brave', 'wave'],
['chip', 'grip', 'tip'],
['fold', 'hold', 'bold'],
['flee', 'free', 'glee'],
['wax', 'fax', 'max'],
['vest', 'quest', 'best'],
['blue', 'true', 'clue'],
['cart', 'dart', 'part'],
['mean', 'lean', 'seen'],
['pale', 'tale', 'scale'],
['mug', 'rug', 'plug'],
['slow', 'grow', 'show'],
['brand', 'hand', 'land'],
['lace', 'chase', 'base'],
['note', 'quote', 'vote'],
['mount', 'count', 'fount'],
['seek', 'peak', 'leak'],
['zoom', 'room', 'bloom'],
['hall', 'call', 'mall'],
['wide', 'side', 'tide'],
['pool', 'fool', 'tool'],
['wink', 'sink', 'link'],
['jazz', 'fizz', 'buzz'],
['feat', 'seat', 'beat'],
['board', 'sword', 'lord'],
['hike', 'bike', 'pike'],
['trunk', 'skunk', 'bunk'],
['crime', 'lime', 'time'],
['blink', 'drink', 'think'],
['flask', 'mask', 'task'],
['slate', 'mate', 'date'],
['stare', 'dare', 'care'],
['cool', 'fool', 'tool'],
['glow', 'show', 'flow'],
['yard', 'guard', 'card'],
['stay', 'play', 'ray'],
['hatch', 'match', 'patch'],
['jail', 'pale', 'tail'],
['crisp', 'lisp', 'wisp'],
['skip', 'tip', 'lip'],
['frog', 'log', 'dog'],
['peace', 'lease', 'grease'],
['lost', 'cost', 'frost'],
['lock', 'rock', 'clock'],
['mice', 'slice', 'twice'],
['neat', 'seat', 'beat'],
['flow', 'grow', 'show'],
['flat', 'hat', 'pat'],
['milk', 'silk', 'bilk'],
['shoot', 'loot', 'root'],
['bench', 'wrench', 'trench'],
['crawl', 'fall', 'hall'],
['fame', 'name', 'same'],
['gold', 'bold', 'told'],
['sink', 'link', 'pink'],
['dart', 'part', 'cart'],
['rest', 'best', 'guest'],
['beat', 'heat', 'seat'],
['thigh', 'high', 'fly'],
['boil', 'soil', 'coil'],
['sleek', 'leak', 'peak'],
['host', 'most', 'ghost'],
['strive', 'drive', 'dive'],
['torn', 'born', 'corn'],
['flea', 'sea', 'tree'],
['vest', 'chest', 'best'],
['height', 'might', 'light'],
['cast', 'fast', 'last'],
['flow', 'blow', 'glow'],
['trip', 'sip', 'lip'],
['gain', 'pain', 'rain'],
['brave', 'wave', 'save'],
['frown', 'clown', 'down'],
['cat', 'hat', 'bat'],
['dog', 'log', 'fog'],
['sun', 'run', 'fun'],
['book', 'hook', 'look'],
['kite', 'light', 'fight'],
['chair', 'fair', 'hair'],
['ball', 'tall', 'wall'],
['ring', 'king', 'sing'],
['lake', 'bake', 'shake'],
['ship', 'lip', 'tip'],
['car', 'star', 'bar'],
['pen', 'hen', 'ten'],
['tree', 'bee', 'free'],
['moon', 'spoon', 'soon'],
['fox', 'box', 'socks'],
['drum', 'plum', 'thumb'],
['clock', 'rock', 'sock'],
['bird', 'heard', 'word'],
['fish', 'dish', 'wish'],
['train', 'rain', 'plain'],
['night', 'bright', 'sight'],
['sky', 'high', 'fly'],
['ice', 'nice', 'price'],
['hill', 'still', 'fill'],
['road', 'load', 'toad'],
['door', 'more', 'floor'],
['cake', 'make', 'break'],
['light', 'night', 'kite'],
['frog', 'jog', 'blog'],
['plant', 'ant', 'grant'],
['swing', 'string', 'ring'],
['bread', 'red', 'head'],
['duck', 'luck', 'truck'],
['school', 'pool', 'tool'],
['bell', 'shell', 'tell'],
['table', 'stable', 'cable'],
['chair', 'pair', 'fair'],
['pig', 'big', 'dig'],
['street', 'meet', 'sweet'],
['leaf', 'beef', 'chief'],
['corn', 'torn', 'born'],
['hair', 'stare', 'pair'],
['stone', 'bone', 'cone'],
['ground', 'found', 'round'],
['sand', 'hand', 'band'],
['mouse', 'house', 'louse'],
['water', 'daughter', 'slaughter'],
['hill', 'will', 'still'],
['nest', 'best', 'rest'],
['cold', 'hold', 'fold'],
['bean', 'mean', 'green'],
['box', 'fox', 'socks'],
['coast', 'toast', 'boast'],
['drum', 'sum', 'plum'],
['fence', 'sense', 'dense'],
['fire', 'tire', 'wire'],
['goat', 'coat', 'boat'],
['gate', 'late', 'state'],
['ice', 'slice', 'twice'],
['jam', 'ham', 'slam'],
['key', 'tree', 'free'],
['line', 'vine', 'shine'],
['mill', 'will', 'fill'],
['net', 'jet', 'pet'],
['park', 'dark', 'bark'],
['queen', 'green', 'seen'],
['rope', 'hope', 'scope'],
['seed', 'feed', 'need'],
['shell', 'bell', 'tell'],
['tap', 'map', 'nap'],
['vine', 'line', 'fine'],
['wave', 'cave', 'save'],
['year', 'deer', 'near'],
['zinc', 'blink', 'think'],
['aim', 'claim', 'frame'],
['band', 'hand', 'land'],
['blue', 'clue', 'true'],
['cake', 'bake', 'lake'],
['dash', 'flash', 'crash'],
['eight', 'late', 'wait'],
['full', 'pull', 'bull'],
['gain', 'pain', 'train'],
['hide', 'ride', 'slide'],
['jot', 'dot', 'hot'],
['kite', 'light', 'night'],
['lamp', 'camp', 'stamp'],
['mark', 'bark', 'dark'],
['nest', 'best', 'chest'],
['oak', 'soak', 'cloak'],
['pack', 'stack', 'track'],
['quack', 'back', 'sack'],
['rain', 'train', 'plain'],
['salt', 'halt', 'vault'],
['tent', 'bent', 'sent'],
['use', 'muse', 'fuse'],
['vest', 'test', 'chest'],
['wild', 'mild', 'child'],
['yell', 'spell', 'sell'],
['zinc', 'link', 'blink'],
['ace', 'face', 'place'],
['boom', 'room', 'zoom'],
['cart', 'dart', 'part'],
['dine', 'line', 'shine'],
['elbow', 'fellow', 'yellow'],
['flute', 'cute', 'suit'],
['glue', 'blue', 'true'],
['heat', 'seat', 'beat'],
['iron', 'lion', 'pylon'],
['joke', 'poke', 'smoke'],
['kite', 'bite', 'light'],
['loop', 'soup', 'hoop'],
['moon', 'noon', 'tune'],
['nest', 'west', 'best'],
['oval', 'vocal', 'local'],
['pearl', 'curl', 'twirl'],
['quill', 'grill', 'still'],
['rock', 'sock', 'clock'],
['soap', 'rope', 'hope'],
['tent', 'lent', 'rent'],
['under', 'thunder', 'plunder'],
['voice', 'choice', 'noise'],
['wind', 'mind', 'find'],
['xray', 'stay', 'play'],
['yard', 'card', 'guard'],
['zone', 'phone', 'cone'],
['beef', 'leaf', 'chief'],
['clash', 'flash', 'dash'],
['den', 'hen', 'ten'],
['edge', 'hedge', 'pledge'],
['flake', 'shake', 'bake'],
['glide', 'ride', 'slide'],
['heap', 'keep', 'leap'],
['inch', 'pinch', 'winch'],
['jade', 'fade', 'trade'],
['keep', 'deep', 'leap'],
['load', 'road', 'toad'],
['march', 'arch', 'starch'],
['nice', 'ice', 'slice'],
['oat', 'coat', 'boat'],
['peak', 'leak', 'speak'],
['quest', 'test', 'rest'],
['rope', 'hope', 'scope'],
['song', 'long', 'strong'],
['tape', 'shape', 'grape'],
['unit', 'minute', 'limit'],
['vein', 'gain', 'train'],
['wheel', 'deal', 'seal'],
['yawn', 'dawn', 'lawn'],
['zinc', 'blink', 'think'],
['ace', 'face', 'place'],
['abrade', 'cascade', 'paraded'],
['blink', 'sink', 'wink'],
['crave', 'enclave', 'pave'],
['duel', 'fuel', 'cruel'],
['exotic', 'hypnotic', 'neurotic'],
['flare', 'aware', 'rare'],
['gait', 'freight', 'trait'],
['harbor', 'arbor', 'scarborough'],
['ignite', 'recite', 'polite'],
['jester', 'fester', 'tester'],
['knave', 'brave', 'wave'],
['locket', 'pocket', 'rocket'],
['maestro', 'basso', 'lasso'],
['nook', 'book', 'took'],
['operate', 'separate', 'celebrate'],
['plight', 'sight', 'flight'],
['quiver', 'shiver', 'deliver'],
['radiate', 'saturate', 'create'],
['snicker', 'flicker', 'picker'],
['turmoil', 'foil', 'coil'],
['utter', 'butter', 'flutter'],
['venture', 'denture', 'adventure'],
['wander', 'ponder', 'fonder'],
['xenon', 'siphon', 'canon'],
['yield', 'field', 'shield'],
['zephyr', 'tether', 'weather'],
['abate', 'contemplate', 'inflate'],
['bristle', 'whistle', 'thistle'],
['chime', 'mime', 'climb'],
['divine', 'combine', 'outline'],
['embrace', 'disgrace', 'chase'],
['festoon', 'balloon', 'cartoon'],
['gallant', 'talent', 'valant'],
['hasten', 'fasten', 'chasten'],
['inquire', 'aspire', 'retire'],
['juggle', 'struggle', 'snuggle'],
['kernel', 'journal', 'colonel'],
['levitate', 'procreate', 'animate'],
['mingle', 'jingle', 'single'],
['navigate', 'mitigate', 'levitate'],
['obscure', 'immature', 'secure'],
['peruse', 'amuse', 'infuse'],
['quench', 'wrench', 'bench'],
['reside', 'divide', 'outside'],
['saunter', 'haunter', 'fonter'],
['tangle', 'mangle', 'strangle'],
['uplift', 'swift', 'gift'],
['venture', 'censure', 'denture'],
['whirl', 'twirl', 'pearl'],
['xenon', 'canon', 'bison'],
['yield', 'shield', 'field'],
['zeal', 'deal', 'heal'],
['apex', 'flex', 'complex'],
['bluster', 'cluster', 'muster'],
['cartel', 'parallel', 'carousel'],
['dwell', 'shell', 'propel'],
['elicit', 'explicit', 'implicit'],
['fumble', 'tumble', 'grumble'],
['glisten', 'listen', 'christen'],
['hurdle', 'myrtle', 'turtle'],
['inflate', 'motivate', 'relate'],
['journal', 'kernel', 'vernal'],
['kettle', 'settle', 'petal'],
['liquid', 'vivid', 'rigid'],
['muddle', 'puddle', 'cuddle'],
['nurture', 'culture', 'venture'],
['oppose', 'compose', 'disclose'],
['ponder', 'yonder', 'fonder'],
['quibble', 'dribble', 'nibble'],
['refute', 'compute', 'execute'],
['shatter', 'clatter', 'matter'],
['traverse', 'converse', 'reverse'],
['unveil', 'detail', 'trail'],
['vanish', 'banish', 'garnish'],
['whistle', 'thistle', 'bristle'],
['xenon', 'bison', 'poison'],
['yield', 'field', 'sealed'],
['zenith', 'beneath', 'wreath'],
['astonish', 'demolish', 'polish'],
['blend', 'trend', 'attend'],
['contrive', 'arrive', 'survive'],
['dispel', 'propel', 'excel'],
['enchant', 'descant', 'implant'],
['fortify', 'justify', 'magnify'],
['gleam', 'stream', 'regime'],
['hinder', 'cinder', 'kinder'],
['inspire', 'perspire', 'acquire'],
['jangle', 'mangle', 'angle'],
['kindle', 'spindle', 'dwindle'],
['levity', 'gravity', 'brevity'],
['modify', 'amplify', 'notify'],
['nurture', 'vulture', 'culture'],
['outshine', 'combine', 'define'],
['prelude', 'conclude', 'intrude'],
['quiver', 'deliver', 'river'],
['reside', 'decide', 'divide'],
['savor', 'favor', 'flavor'],
['tranquil', 'gentle', 'versatile'],
['undergo', 'bestow', 'overthrow'],
['vast', 'contrast', 'forecast'],
['wander', 'ponder', 'yonder'],
['yearn', 'learn', 'concern'],
['zealot', 'pilot', 'camelot'],
['announce', 'pounce', 'bounce'],
['brisk', 'risk', 'disc'],
['concede', 'succeed', 'agreed'],
['despair', 'affair', 'repair'],
['elevate', 'mitigate', 'create'],
['fission', 'mission', 'vision'],
['gesture', 'texture', 'adventure'],
['hinder', 'cinder', 'tinder'],
['impose', 'repose', 'compose'],
['jest', 'best', 'rest'],
['kinetic', 'aesthetic', 'apathetic'],
['launch', 'branch', 'staunch'],
['mimic', 'gimmick', 'civic'],
['nectar', 'sector', 'vector'],
['octave', 'behave', 'engrave'],
['parrot', 'carrot', 'ferret'],
['quest', 'jest', 'rest'],
['rebel', 'excel', 'propel'],
['sustain', 'refrain', 'maintain'],
['trance', 'dance', 'enhance'],
['unique', 'antique', 'boutique'],
['verify', 'simplify', 'multiply'],
['waffle', 'taffle', 'raffle'],
['exclaim', 'proclaim', 'rename'],
['blend', 'friend', 'lend'],
['concur', 'recur', 'prefer'],
['delight', 'excite', 'invite'],
['elevate', 'create', 'inflate'],
['frolic', 'hydraulic', 'melodic'],
['glitter', 'bitter', 'twitter'],
['harmonize', 'fantasize', 'realize'],
['ideal', 'appeal', 'reveal'],
['journal', 'infernal', 'external'],
['knot', 'forgot', 'robot'],
['listen', 'christen', 'glisten'],
['muster', 'cluster', 'bluster'],
['nourish', 'flourish', 'relinquish'],
['orbit', 'prohibit', 'exhibit'],
['propel', 'excel', 'compel'],
['quirky', 'jerky', 'turkey'],
['roster', 'foster', 'imposter'],
['shimmer', 'glimmer', 'dimmer'],
['translate', 'create', 'equate'],
['universe', 'rehearse', 'converse'],
['vivid', 'rigid', 'liquid'],
['witness', 'fitness', 'littleness'],
['zealous', 'jealous', 'treacherous'],
['baffle', 'daffle', 'raffle'],
['cringe', 'fringe', 'binge'],
['dapper', 'napper', 'trapper'],
['ember', 'member', 'november'],
['fiddle', 'middle', 'riddle'],
['glare', 'flare', 'rare'],
['haste', 'taste', 'paste'],
['intrigue', 'league', 'teague'],
['jubilant', 'tenant', 'fragrant'],
['knell', 'fell', 'quell'],
['marvel', 'carvel', 'harvel'],
['navigate', 'mitigate', 'integrate'],
['obliterate', 'motivate', 'facilitate'],
['pursue', 'blue', 'queue'],
['radiate', 'saturate', 'moderate'],
['shrink', 'wink', 'link'],
['tether', 'weather', 'nether'],
['undertake', 'shake', 'flake'],
['versatile', 'gentle', 'subtle'],
['whistle', 'missile', 'epistle'],
['yield', 'field', 'shield'],
['zest', 'chest', 'rest'],
['ample', 'sample', 'trample'],
['brim', 'slim', 'grim'],
['clutch', 'much', 'touch'],
['delight', 'height', 'flight'],
['elate', 'state', 'relate'],
['friction', 'prediction', 'restriction'],
['grand', 'stand', 'band'],
['hasten', 'fasten', 'chasten'],
['inspire', 'retire', 'perspire'],
['jest', 'best', 'quest'],
['kernel', 'vernal', 'eternal'],
['lament', 'cement', 'segment'],
['mingle', 'pringle', 'single'],
['navigate', 'investigate', 'procreate'],
['oppose', 'disclose', 'propose'],
['parlay', 'relay', 'decay'],
['quench', 'bench', 'trench'],
['revive', 'strive', 'derive'],
['savor', 'flavor', 'favor'],
['thrive', 'arrive', 'contrive'],
['unique', 'boutique', 'antique'],
['vanish', 'banish', 'garnish'],
['wander', 'ponder', 'fonder'],
['xenon', 'canon', 'siphon'],
['yonder', 'ponder', 'plunder'],
['zealous', 'jealous', 'overzealous'],
['abate', 'debate', 'inflate'],
['brisk', 'risk', 'disc'],
['Afloat', 'Remote', 'Emote'],
['Banish', 'Vanish', 'Garnish'],
['Collide', 'Abide', 'Divide'],
['Distill', 'Fulfill', 'Refill'],
['Embrace', 'Displace', 'Replace'],
['Flicker', 'Bicker', 'Liquor'],
['Glisten', 'Listen', 'Christen'],
['Harbor', 'Farther', 'Charter'],
['Ignite', 'Polite', 'Recite'],
['Juggle', 'Snuggle', 'Muggle'],
['Kindle', 'Spindle', 'Dwindle'],
['Luster', 'Buster', 'Cluster'],
['Meadow', 'Shadow', 'Widow'],
['Nurture', 'Capture', 'Texture'],
['Operate', 'Delegate', 'Navigate'],
['Plunder', 'Thunder', 'Wonder'],
['Quiver', 'Shiver', 'Deliver'],
['Radiant', 'Deviant', 'Variant'],
['Saunter', 'Haunter', 'Enchanter'],
['Tranquil', 'Distill', 'Fulfill'],
['Undertone', 'Overgrown', 'Unknown'],
['Venture', 'Adventure', 'Conjuncture'],
['Wander', 'Yonder', 'Ponder'],
['Xenon', 'Bison', 'Cylon'],
['Yield', 'Shield', 'Field'],
['Zephyr', 'Cipher', 'Viper'],
['Array', 'Convey', 'Display'],
['Bluster', 'Muster', 'Duster'],
['Chisel', 'Dazzle', 'Drizzle'],
['Dabble', 'Scrabble', 'Babble'],
['Enchant', 'Implant', 'Command'],
['Fluster', 'Cluster', 'Buster'],
['Garnish', 'Tarnish', 'Vanish'],
['Hurdle', 'Myrtle', 'Turtle'],
['Invade', 'Parade', 'Brigade'],
['Jester', 'Tester', 'Fester'],
['Kernel', 'Journal', 'Diurnal'],
['Levitate', 'Celebrate', 'Demonstrate'],
['Marvel', 'Carvel', 'Narwhal'],
['Navigate', 'Mitigate', 'Evacuate'],
['Obscure', 'Secure', 'Procure'],
['Peruse', 'Infuse', 'Excuse'],
['Quench', 'Trench', 'Bench'],
['Reside', 'Abide', 'Confide'],
['Shimmer', 'Glimmer', 'Dimmer'],
['Tangle', 'Mangle', 'Spangle'],
['Undulate', 'Oscillate', 'Translate'],
['Vortex', 'Annex', 'Complex'],
['Whistle', 'Bristle', 'Thistle'],
['Xenon', 'Fission', 'Vision'],
['Yield', 'Build', 'Gild'],
['Zenith', 'Beneath', 'Heath'],
['Accrue', 'Subdue', 'Review'],
['Blend', 'Rend', 'Attend'],
['Cradle', 'Riddle', 'Kindle'],
['Descry', 'Defy', 'Apply'],
['Elucidate', 'Berate', 'Debate'],
['Flinch', 'Pinch', 'Inch'],
['Gratitude', 'Latitude', 'Multitude'],
['Hasten', 'Chasten', 'Fasten'],
['Incite', 'Alight', 'Recite'],
['Jumble', 'Tumble', 'Grumble'],
['Kindle', 'Spindle', 'Brindle'],
['Levity', 'Brevity', 'Gravity'],
['Modify', 'Justify', 'Amplify'],
['Nurture', 'Venture', 'Culture'],
['Oppose', 'Disclose', 'Compose'],
['Ponder', 'Yonder', 'Fonder'],
['Quiver', 'Deliver', 'Shiver'],
['Reside', 'Divide', 'Confide'],
['Savor', 'Favor', 'Flavor'],
['Tranquil', 'Distill', 'Fulfill'],
['Utilize', 'Realize', 'Surmise'],
['Vapor', 'Taper', 'Draper'],
['Wander', 'Yonder', 'Ponder'],
['Xerophyte', 'Parasite', 'Unite'],
['Yield', 'Shield', 'Weld'],
['Zenith', 'Wreath', 'Sheath'],
['Audacious', 'Spacious', 'Gracious'],
['Beacon', 'Deacon', 'Liken'],
['Celestial', 'Terrestrial', 'Bestial'],
['Dapper', 'Clapper', 'Napper'],
['Elicit', 'Explicit', 'Prohibit'],
['Forage', 'Courage', 'Storage'],
['Glisten', 'Listen', 'Christen'],
['Hinder', 'Tinder', 'Kinder'],
['Invigorate', 'Integrate', 'Recreate'],
['Jest', 'Crest', 'Test'],
['Kindred', 'Bred', 'Misled'],
['Lattice', 'Status', 'Apparatus'],
['Mutate', 'Create', 'State'],
['Navigate', 'Investigate', 'Annotate'],
['Obfuscate', 'Intricate', 'Dedicate'],
['Preside', 'Provide', 'Decide'],
['Query', 'Flurry', 'Hurry'],
['Reside', 'Abide', 'Glide'],
['Scramble', 'Ramble', 'Assemble'],
['Traverse', 'Converse', 'Adverse'],
['Utilize', 'Surmise', 'Apprise'],
['Eclipse', 'Scripts', 'Crypts'],
['Banter', 'Canter', 'Planter'],
['Circuit', 'Work It', 'Turkit'],
['Entice', 'Splice', 'Device'],
['Hibernate', 'Fabricate', 'Radiate'],
['Traverse', 'Rehearse', 'Diverse'],
['Beacon', 'Deacon', 'Recon'],
['Mulch', 'Gulch', 'Fulch'],
['Adjacent', 'Replacement', 'Abasement'],
['Wrench', 'Quench', 'Trench'],
['Nomad', 'Ironclad', 'Tad'],
['Decipher', 'Piper', 'Swiper'],
['Obstacle', 'Chronicle', 'Monocle'],
['Mingle', 'Tingle', 'Pringle'],
['Merchant', 'Servant', 'Current'],
['Pathway', 'Subway', 'Dismay'],
['Plume', 'Costume', 'Perfume'],
['Textile', 'Exile', 'Mobile'],
['Cantor', 'Enchanter', 'Banter'],
['Placid', 'Acid', 'Massive'],
['Enhance', 'Stance', 'Romance'],
['Vertex', 'Context', 'Vortex'],
['Scarlet', 'Starlet', 'Carlet'],
['Forage', 'Storage', 'Barrage'],
['Vibrate', 'Create', 'Negate'],
['Essence', 'Presence', 'Adolescence'],
['Luster', 'Cluster', 'Muster'],
['Enclose', 'Expose', 'Suppose'],
['Vessel', 'Nestle', 'Wrestle'],
['Fortress', 'Distress', 'Address'],
['Volume', 'Assume', 'Resume'],
['Zenith', 'Wreath', 'Heath'],
['Quarantine', 'Machine', 'Routine'],
['Subdue', 'Renew', 'Avenue'],
['Elegant', 'Relevant', 'Elephant'],
['Phoenix', 'Kleenex', 'Index'],
['Sphere', 'Mere', 'Engineer'],
['Habitat', 'Acrobat', 'Aristocrat'],
['Quantum', 'Random', 'Tandem'],
['Archive', 'Strive', 'Contrive'],
['Nexus', 'Complex Us', 'Reflexes'],
['Absolve', 'Resolve', 'Revolve'],
['Oracle', 'Miracle', 'Pinnacle'],
['Exhibit', 'Digit', 'Rivet'],
['Venture', 'Capture', 'Lecture'],
['Cascade', 'Brigade', 'Masquerade'],
['Ingest', 'Protest', 'Manifest'],
['Affluent', 'Congruent', 'Fluent'],
['Fragment', 'Segment', 'Element'],
['Prism', 'Schism', 'Mechanism'],
['Conquest', 'Digest', 'Invest'],
['Tether', 'Nether', 'Heather'],
['Gallop', 'Develop', 'Envelope'],
['Lattice', 'Status', 'Apparatus'],
['Extract', 'Compact', 'Contract'],
['Mosaic', 'Archaic', 'Hypnotic'],
['Gambit', 'Habit', 'Rabbit'],
['Relapse', 'Perhaps', 'Collapse'],
['Matrix', 'Prefix', 'Appendix'],
['Drift', 'Lift', 'Swift'],
['Crescendo', 'Lendo', 'Agenda'],
['Frantic', 'Atlantic', 'Gigantic'],
['Capsule', 'Gradual', 'Casual'],
['Merchant', 'Current', 'Servant'],
['Mischief', 'Motif', 'Belief'],
['Polymath', 'Telepath', 'Aftermath'],
['Vortex', 'Annex', 'Index'],
['Kindle', 'Spindle', 'Brindle'],
['Monolith', 'Myth', 'Kith'],
['Vibrato', 'Pronto', 'Contro'],
['Traverse', 'Universe', 'Diverse'],
['Sphinx', 'Links', 'Minx'],
['Ballast', 'Contrast', 'Blast'],
['Kinetic', 'Synthetic', 'Aesthetic'],
['Cipher', 'Diver', 'Lifer'],
['Jeopardy', 'Harmony', 'Melody'],
['Tango', 'Mango', 'Fandango'],
['Grotto', 'Motto', 'Lotto'],
['Python', 'Bison', 'Horizon'],
['Fragment', 'Sentiment', 'Element'],
['Cascade', 'Barricade', 'Masquerade'],
['Murmur', 'Confirm Her', 'Usher'],
['Fulcrum', 'Sacrum', 'Drum'],
['Lexicon', 'Hexagon', 'Amazon'],
['Algebra', 'Era', 'Opera'],
['Cajole', 'Patrol', 'Console'],
['Phoenix', 'Kleenex', 'Prefix'],
['Parallel', 'Carousel', 'Propel'],
['Intricate', 'Fabricate', 'Delegate'],
['Vortex', 'Complex', 'Reflex'],
['Palindrome', 'Homestead', 'Syndrome'],
['Evaluate', 'Integrate', 'Communicate'],
['Orchestra', 'Subpoena', 'Arena'],
['Mitigate', 'Perpetrate', 'Fascinate'],
['Quantum', 'Handsome', 'Bunsen'],
['Incline', 'Confine', 'Mine'],
['Portrait', 'Obfuscate', 'Elate'],
['Gestation', 'Rotation', 'Station'],
['Fracture', 'Rapture', 'Capture'],
['Infuse', 'Excuse', 'Cruise'],
['Garnish', 'Tarnish', 'Accomplish'],
['Humble', 'Mumble', 'Tumble'],
['Pillar', 'Thriller', 'Chiller'],
['Stature', 'Capture', 'Enrapture'],
['Infusion', 'Illusion', 'Conclusion'],
['Tactic', 'Galactic', 'Automatic'],
['Marvel', 'Parvel', 'Narwhal'],
['Entity', 'Serenity', 'Identity'],
['Agile', 'Versatile', 'Mobile'],
['Omen', 'Broken', 'Token'],
['Alcove', 'Trove', 'Stove'],
['Glimmer', 'Dimmer', 'Slimmer'],
['Canvas', 'Atlantis', 'Anthem'],
['Surge', 'Scourge', 'Converge'],
['Circuit', 'Turk It', 'Work It'],
['Indicate', 'Fabricate', 'Radiate'],
['Cascade', 'Barricade', 'Masquerade'],
['Forlorn', 'Adorn', 'Mourn'],
['Radius', 'Gradient', 'Obedient'],
['Apex', 'Complex', 'Vortex'],
['Eclipse', 'Scripts', 'Crypts'],
['Absolve', 'Resolve', 'Dissolve'],
['Falcon', 'Bacon', 'Awoken'],
['Marigold', 'Parried Bold', 'Unfold'],
['Tonic', 'Chronic', 'Sonic'],
['Mosaic', 'Archaic', 'Forsake'],
['Whisper', 'Mister', 'Blister'],
['Opulent', 'Occulent', 'Succulent'],
['Charade', 'Arcade', 'Parade'],
['Vagabond', 'Beyond', 'Respond'],
['Spectrum', 'Rectum', 'Effect Em'],
['Scribble', 'Quibble', 'Nibble'],
['Gulch', 'Mulch', 'Belch'],
['Fragment', 'Segment', 'Element'],
['Encrypt', 'Manuscript', 'Transcript'],
['Forage', 'Barrage', 'Courage'],
['Sculpture', 'Culture', 'Nurture'],
['Ardent', 'Pendant', 'Defendant'],
['Circuit', 'Work It', 'Jerk It'],
['Flicker', 'Sticker', 'Quicker'],
['Gallant', 'Talent', 'Relent'],
['Vessel', 'Wrestle', 'Nestle'],
['Tyrant', 'Vibrant', 'Reluctant'],
['Vulture', 'Culture', 'Nurture'],
['Sector', 'Vector', 'Detector'],
['Impulse', 'Convulse', 'Repulse'],
['Candid', 'Banded', 'Handed'],
['Formula', 'Dracula', 'Caligula'],
['Enigma', 'Stigma', 'Sigma'],
['Glisten', 'Listen', 'Piston'],
['Cadence', 'Radiance', 'Patience'],
['Harmonic', 'Iconic', 'Chronic'],
['Conclude', 'Include', 'Prelude'],
['Apex', 'Vortex', 'Complex'],
['Mandarin', 'Caravan', 'Plan'],
['Illuminate', 'Fascinate', 'Create'],
['Eloquent', 'Dissonant', 'Equivalent'],
['Scarab', 'Arab', 'Carat'],
['Elevate', 'Fabricate', 'Calculate'],
['Envision', 'Precision', 'Decision'],
['Embark', 'Stark', 'Remark'],
['Disclose', 'Expose', 'Suppose'],
['Vibrant', 'Tyrant', 'Aspirant'],
['Cipher', 'Diver', 'River'],
['Falcon', 'Awoken', 'Token'],
['Distinct', 'Linked', 'Jinxed'],
['Charisma', 'Stigma', 'Dilemma'],
['Circumvent', 'Invent', 'Consent'],
['Monument', 'Complement', 'Implement'],
['Circuit', 'Work It', 'Berk It'],
['Blossom', 'Possum', 'Bottom'],
['Pilgrim', 'Trim', 'Dim'],
['Magnet', 'Jacket', 'Basket'],
['Affront', 'Blunt', 'Stunt'],
['Turbulent', 'Instrument', 'Ornament'],
['Vessel', 'Nestle', 'Wrestle'],
['Conduit', 'Fluid', 'Intuit'],
['Gallant', 'Talent', 'Silent'],
['Pattern', 'Saturn', 'Lantern'],
['Algorithm', 'Prism', 'Baptism'],
['Instant', 'Distant', 'Assistant'],
['Random', 'Tandem', 'Handsome'],
['Absolve', 'Resolve', 'Dissolve'],
['Signal', 'Original', 'Criminal'],
['Decimal', 'Minimal', 'Animal'],
['Cascade', 'Brigade', 'Masquerade'],
['Palindrome', 'Syndrome', 'Homestead'],
['Extend', 'Transcend', 'Depend'],
['Whisper', 'Twister', 'Mister'],
['Nimbus', 'Campus', 'Ignoramus'],
['Diminish', 'Relinquish', 'Establish'],
['Corridor', 'Mentor', 'Labor'],
['Infuse', 'Cruise', 'Enthuse'],
['Cradle', 'Fable', 'Able'],
['Vibrate', 'Evacuate', 'Animate'],
['Cloister', 'Boister', 'Rejoicer'],
['Sanguine', 'Genuine', 'Melamine'],
['Tangible', 'Manageable', 'Adjustable'],
['Rapture', 'Capture', 'Fracture'],
['Residue', 'Renew', 'Subdue'],
['Vibrant', 'Tyrant', 'Giant'],
['Wander', 'Yonder', 'Ponder'],
['Xeric', 'Cleric', 'Lyric'],
['Yield', 'Field', 'Shield'],
['Zenith', 'Beneath', 'Heath'],
['Audible', 'Plausible', 'Laudable'],
['Bluster', 'Muster', 'Fluster'],
['Cascade', 'Parade', 'Masquerade'],
['Distill', 'Fulfill', 'Instill'],
['Elusive', 'Conclusive', 'Intrusive'],
['Fiddle', 'Middle', 'Piddle'],
['Glimmer', 'Simmer', 'Shimmer'],
['Hasten', 'Chasten', 'Fasten'],
['Illuminate', 'Commiserate', 'Fascinate'],
['Journey', 'Attorney', 'Gurney'],
['Kindness', 'Blindness', 'Mindfulness'],
['Levitate', 'Meditate', 'Recreate'],
['Magnify', 'Justify', 'Simplify'],
['Navigate', 'Operate', 'Integrate'],
['Obsolete', 'Compete', 'Discrete'],
['Perplex', 'Annex', 'Index'],
['Quarrel', 'Barrel', 'Apparel'],
['Resonate', 'Eliminate', 'Generate'],
['Surpass', 'Class', 'Mass'],
['Tranquil', 'Refill', 'Fulfill'],
['Utilize', 'Realize', 'Disguise'],
['Vibrate', 'Create', 'Elevate'],
['Wander', 'Ponder', 'Yonder'],
['Xerophyte', 'Erythrite', 'Electrolyte'],
['Yield', 'Shield', 'Field'],
['Zenith', 'Beneath', 'Wreath'],
['Absolve', 'Resolve', 'Evolve'],
['Begrudge', 'Smudge', 'Judge'],
['Catapult', 'Result', 'Consult'],
['Delight', 'Contrite', 'Invite'],
['Elation', 'Ovation', 'Vacation'],
['Frivolous', 'Envious', 'Curious'],
['Gratify', 'Justify', 'Modify'],
['Harmonize', 'Emphasize', 'Fantasize'],
['Illuminate', 'Demonstrate', 'Fascinate'],
['Jostle', 'Apostle', 'Hostel'],
['Kindness', 'Blindness', 'Fondness'],
['Levitate', 'Radiate', 'Meditate'],
['Mandate', 'Generate', 'Elate'],
['Navigate', 'Operate', 'Elucidate'],
['Obscure', 'Endure', 'Mature'],
['Persuade', 'Parade', 'Invade'],
['Qualify', 'Magnify', 'Certify'],
['Radiate', 'Emulate', 'Fascinate'],
['Scrutinize', 'Realize', 'Recognize'],
['Terminate', 'Elevate', 'Insulate'],
['Uplift', 'Swift', 'Gift'],
['Vibrate', 'Contemplate', 'Create'],
['Wander', 'Yonder', 'Fonder'],
['Xerophyte', 'Electrolyte', 'Baryte'],
['Yield', 'Shield', 'Weld'],
['Zenith', 'Wreath', 'Heath'],
['Ambulate', 'Calculate', 'Stimulate'],
['Brighten', 'Frighten', 'Enlighten'],
['Construe', 'Imbue', 'Subdue'],
['Delight', 'Invite', 'Contrite'],
['Elevate', 'Contemplate', 'Generate'],
['Frivolous', 'Curious', 'Envious'],
['Gratify', 'Amplify', 'Identify'],
['Harmonize', 'Realize', 'Recognize'],
['Illuminate', 'Celebrate', 'Perpetuate'],
['Jostle', 'Apostle', 'Fossil'],
['Kindness', 'Fondness', 'Blindness'],
['Levitate', 'Radiate', 'Penetrate'],
['Mandate', 'Translate', 'Investigate'],
['Navigate', 'Generate', 'Operate'],
['Obscure', 'Mature', 'Secure'],
['Persuade', 'Invade', 'Cascade'],
['Qualify', 'Identify', 'Justify'],
['Radiate', 'Generate', 'Contemplate'],
['Scrutinize', 'Emphasize', 'Realize'],
['Terminate', 'Insulate', 'Elevate'],
['Uplift', 'Gift', 'Drift'],
['Vibrate', 'Contemplate', 'Integrate'],
['Wander', 'Ponder', 'Yonder'],
['Xerophyte', 'Electrolyte', 'Baryte'],
['Yield', 'Shield', 'Weld'],
['Zenith', 'Wreath', 'Heath'],
['Ambulate', 'Stimulate', 'Fascinate'],
['Brighten', 'Frighten', 'Enlighten'],
['Construe', 'Imbue', 'Subdue'],
['Delight', 'Contrite', 'Recite'],
['Elevate', 'Generate', 'Elate'],
['Frivolous', 'Curious', 'Envious'],
['Gratify', 'Justify', 'Verify'],
['Harmonize', 'Emphasize', 'Fantasize'],
['Illuminate', 'Celebrate', 'Relate'],
['Jostle', 'Fossil', 'Apostle'],
['Kindness', 'Fondness', 'Blindness'],
['Levitate', 'Generate', 'Meditate'],
['Mandate', 'Operate', 'Elate'],
['Navigate', 'Generate', 'Emulate'],
['Obscure', 'Mature', 'Secure'],
['Persuade', 'Cascade', 'Invade'],
['Qualify', 'Magnify', 'Certify'],
['Radiate', 'Generate', 'Elevate'],
['Stonehenge', 'Sportage', 'Mortgage'],
['Storage', 'Shortage', 'Stonehenge'],
['Orange', 'Porridge', 'Storage'],
['Purple', 'Circle', 'Turkle'],
['Silver', 'Quiver', 'Deliver'],
['Month', 'Once', 'Bunch'],
['Chaos', 'Playoffs', 'Seance'],
['Wolf', 'Golf', 'Sulf'],
['Ninth', 'Synth', 'Pinch'],
['Pint', 'Mint', 'Hint'],
['Spirit', 'Merit', 'Ferret'],
['Chimney', 'Finely', 'Kindly'],
['Music', 'Ethic', 'Classic'],
['Depth', 'Kept', 'Swept'],
['Width', 'Myth', 'Fifth'],
['Height', 'Byte', 'Kite'],
['Angst', 'Pranked', 'Banked'],
['Citrus', 'Interest', 'Mistress'],
['Marble', 'Garble', 'Carpal'],
['Cushion', 'Mission', 'Fusion'],
['Frenzy', 'Tendency', 'Fancy'],
['Film', 'Realm', 'Helm'],
['Length', 'Strength', 'Wreath'],
['Cipher', 'Diver', 'Lifer'],
['Zephyr', 'Leisure', 'Pleasure'],
['Conscience', 'Conscious', 'Haunches'],
['Pint', 'Glint', 'Sprint'],
['Algebra', 'Omega', 'Sega'],
['Almond', 'Common', 'Summon'],
['Bulb', 'Dub', 'Scrub'],
['Chaos', 'Circus', 'Focus'],
['Meander', 'Pander', 'Slander'],
['Anguish', 'Relish', 'Diminish'],
['Envelope', 'Antelope', 'Microscope'],
['Falcon', 'Bacon', 'Awoken'],
['Glimpse', 'Limps', 'Chimps'],
['Womb', 'Tomb', 'Loom'],
['Sphinx', 'Jinx', 'Minx'],
['Triumph', 'Rhyme', 'Climb'],
['Epoch', 'Doc', 'Rock'],
['Rustic', 'Mystic', 'Cryptic'],
['System', 'Wisdom', 'Kingdom'],
['Balcony', 'Calamity', 'Harmony'],
['Epoch', 'Eject', 'Respect'],
['Wreckage', 'Message', 'Passage'],
['Pistol', 'Missile', 'Thistle'],
['Conquest', 'Inquest', 'Digest'],
['Hymn', 'Gym', 'Limb'],
['Enigma', 'Sigma', 'Stigma'],
['Rhythm', 'Algorithm', 'Prism'],
['Palette', 'Ballet', 'Wallet'],
['Thesis', 'Pieces', 'Releases'],
['Circuit', 'Perk It', 'Work It'],
['Phoenix', 'Kleenex', 'Remix'],
['Genome', 'Chrome', 'Home'],
['Symphony', 'Company', 'Harmony'],
['Galaxy', 'Malady', 'Calamity'],
['Labyrinth', 'Synth', 'Ninth'],
['Plaque', 'Back', 'Stack'],
['Tango', 'Mango', 'Fandango'],
['Montage', 'Corsage', 'Sabotage'],
['Scholar', 'Dollar', 'Holler'],
['Myth', 'Sith', 'Fifth'],
['Freight', 'Eight', 'Weight'],
['Epoch', 'Revoke', 'Joke'],
['Algebra', 'Era', 'Opera'],
['Whisper', 'Hiss Her', 'Kisser'],
['Ethics', 'Metrics', 'Relics'],
['Pylon', 'Nylon', 'Dial On'],
['Marigold', 'Carried Old', 'Parried Bold'],
['Microscope', 'Horoscope', 'Hope'],
['Candid', 'Hand It', 'Planned It'],
['Elephant', 'Relevant', 'Elegant'],
['Zebra', 'Libera', 'Macabre'],
['Subtle', 'Shuttle', 'Muddle'],
['Capsule', 'Gradual', 'Actual'],
['Recipe', 'Legacy', 'Embassy'],
['Phantom', 'Anthem', 'Random'],
['Shrubbery', 'Mummery', 'Discovery'],
['Garlic', 'Harm It', 'Alarm It'],
['Oxygen', 'Boxed Again', 'Locked Again'],
['Crescent', 'Present', 'Essence'],
['Obelisk', 'Risk', 'Brisk'],
['Whisper', 'Sister', 'Twister'],
['Molecule', 'Vehicle', 'Particle'],
['Flicker', 'Bicker', 'Sticker'],
['Melody', 'Remedy', 'Strategy'],
['Conscious', 'On This', 'Haunches'],
['Giraffe', 'Staff', 'Graph'],
['Canyon', 'Companion', 'Dandelion'],
['Symphony', 'Company', 'Divinity'],
['Sculpture', 'Vulture', 'Culture'],
['Algorithm', 'Rhythm', 'Prism'],
['Strategy', 'Legacy', 'Fantasy'],
['Mutiny', 'Opportunity', 'Community'],
['Sculpture', 'Capture', 'Rapture'],
['Quantum', 'Phantom', 'Random'],
['Summit', 'Submit', 'Comet'],
['Texture', 'Lecture', 'Venture'],
['Drama', 'Llama', 'Comma'],
['Volume', 'Vacuum', 'Costume'],
['Epilogue', 'Dialogue', 'Catalogue'],
['Voyage', 'Courage', 'Storage'],
['Junction', 'Function', 'Compunction'],
['Whisper', 'Mister', 'Sister'],
['Accent', 'Ascent', 'Present'],
['Marvel', 'Carvel', 'Marvel'],
['Phantom', 'Anthem', 'Stanchion'],
['Zenith', 'Beneath', 'Heath'],
['Enthrall', 'Install', 'Call'],
['Mystery', 'History', 'Victory'],
['Riddle', 'Middle', 'Fiddle'],
['Tangent', 'Segment', 'Fragment'],
['Relapse', 'Collapse', 'Perhaps'],
['Novel', 'Shovel', 'Grovel'],
['Jungle', 'Mingle', 'Single'],
['Cascade', 'Parlayed', 'Upstaged'],
['Altitude', 'Gratitude', 'Attitude'],
['Carousel', 'Excel', 'Propel'],
['Cryptic', 'Mystic', 'Artistic'],
['Plaque', 'Stack', 'Attack'],
['Gamma', 'Drama', 'Karma'],
['Fragrance', 'Patience', 'Agents'],
['Treble', 'Rebel', 'Pebble'],
['Cipher', 'Diver', 'Piper'],
['Vessel', 'Wrestle', 'Nestle'],
['Doctrine', 'Apline', 'Outline'],
['Gesture', 'Texture', 'Venture'],
['Plateau', 'Lotto', 'Motto'],
['Radical', 'Tactical', 'Magical'],
['Marginal', 'Cardinal', 'Pardon All'],
['Pilgrim', 'Grim', 'Trim'],
['Window', 'Lingo', 'Flamingo'],
['Calculus', 'Fabulous', 'Asbestos'],
['Analysis', 'Paralysis', 'Hypothesis'],
['Opulent', 'Occulent', 'Turbulent'],
['Residue', 'Subdue', 'Renew'],
['Expire', 'Fire', 'Choir'],
['Lantern', 'Pattern', 'Saturn'],
['Rhythm', 'Prism', 'Schism'],
['Random', 'Tandem', 'Anthem'],
['Whisper', 'Kisser', 'Fissure'],
['Propane', 'Domain', 'Complain'],
['Fossil', 'Apostle', 'Hostel'],
['Echo', 'Gecko', 'Prosecco'],
['Cipher', 'Diver', 'Driver'],
['Quantum', 'Stun Them', 'Bunsen'],
['Meadow', 'Shadow', 'Window'],
['Allusion', 'Confusion', 'Fusion'],
['Murmur', 'Concur', 'Infer'],
['Flicker', 'Sticker', 'Liquor'],
['Colony', 'Harmony', 'Symphony'],
['Latitude', 'Gratitude', 'Fortitude'],
['Mastery', 'Mystery', 'History'],
['Oracle', 'Pinnacle', 'Miracle'],
['Pivotal', 'Digital', 'Fiddle It All'],
['Halo', 'Halo', 'Yellow'],
['Outlast', 'Forecast', 'Blast'],
['Opulent', 'Occulent', 'Fluent'],
['Fractal', 'Practical', 'Tactile'],
['Caravan', 'Bannerman', 'Everyman'],
['Nomad', 'Ironclad', 'Ironclad'],
['Mosaic', 'Prosaic', 'Archais'],
['Conduit', 'Fond It', 'Respond It'],
['Curious', 'Luxurious', 'Victorious'],
['Legacy', 'Embassy', 'Recipe'],
['Embrace', 'Displace', 'Retrace'],
['Volume', 'Vacuum', 'Costume'],
['Precise', 'Device', 'Slice'],
['Waffle', 'Quaffle', 'Scaffold'],
['Recede', 'Proceed', 'Indeed'],
['Crystal', 'Pistol', 'Whistle'],
['Motivate', 'Dedicate', 'Fascinate'],
['Marigold', 'Parried Old', 'Carried Gold'],
['Fragrant', 'Agent', 'Patient'],
['Mirage', 'Barrage', 'Sabotage'],
['Velocity', 'Ferocity', 'Atrocity'],
['Languish', 'Relinquish', 'Vanquish'],
['Overcome', 'Summon', 'Income'],
['Vagabond', 'Correspond', 'Beyond'],
['Plaque', 'Rack', 'Attack'],
['Zenith', 'Beneath', 'Heath'],
['Ridicule', 'Molecule', 'Carnival'],
['Absolve', 'Evolve', 'Solve'],
['Enact', 'Attract', 'Compact'],
['Lantern', 'Pattern', 'Saturn'],
['Historic', 'Euphoric', 'Metaphoric'],
['Quarantine', 'Serpentine', 'Marine'],
['Cavern', 'Tavern', 'Pattern'],
['Residue', 'Renew', 'Subdue'],
['Gigantic', 'Organic', 'Panic'],
['Metronome', 'Chromosome', 'Home'],
['Elegant', 'Element', 'Testament'],
['Flavor', 'Savior', 'Behavior'],
['Harvest', 'Fastest', 'Partest'],
['Winter', 'Splinter', 'Printer'],
['Iconic', 'Harmonic', 'Platonic'],
['Clarity', 'Rarity', 'Charity'],
['Solitude', 'Multitude', 'Gratitude'],
['Artifice', 'Sacrifice', 'Device'],
['Dwindle', 'Kindle', 'Spindle'],
['Numeric', 'Generic', 'Historic'],
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [words, setWords] = useState([]);
  const [frequency, setFrequency] = useState(5);
  const [availableSets, setAvailableSets] = useState(() => {
    const usedSets = getCookie('usedSets') ? JSON.parse(getCookie('usedSets')) : [];
    return allRhymingSets.filter(set => 
      !usedSets.some(usedSet => 
        Array.isArray(usedSet) && usedSet.join(',') === set.join(',')
      )
    );
  });
  const timerRef = useRef(null);

  useEffect(() => {
    console.log('Effect triggered - started:', started, 'countdown:', countdown);
    if (started && countdown === null) {
      console.log('Countdown finished, starting word update timer');
      startWordUpdateTimer();
    }
    return () => {
      if (timerRef.current) {
        console.log('Clearing word update timer');
        clearInterval(timerRef.current);
      }
    };
  }, [started, countdown]);

  const startWordUpdateTimer = () => {
    console.log('startWordUpdateTimer called');
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      console.log('Timer interval triggered');
      getNewWords();
    }, frequency * 1000);
  };

  const getNewWords = () => {
    console.log('getNewWords called. Available sets:', availableSets);
    let newWords;
    if (availableSets.length === 0) {
      console.log('Resetting available sets');
      setAvailableSets(allRhymingSets);
      newWords = allRhymingSets[Math.floor(Math.random() * allRhymingSets.length)];
    } else {
      const randomIndex = Math.floor(Math.random() * availableSets.length);
      newWords = availableSets[randomIndex];
      setAvailableSets(prev => prev.filter((_, index) => index !== randomIndex));
    }
    console.log('New words selected:', newWords);
    setWords(newWords);
    
    const usedSets = getCookie('usedSets') ? JSON.parse(getCookie('usedSets')) : [];
    usedSets.push(newWords);
    setCookie('usedSets', JSON.stringify(usedSets));
  };

  const handleStart = () => {
    console.log('Start button clicked');
    setStarted(true);
    setCountdown(3);
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        console.log('Countdown:', prev);
        if (prev === 1) {
          clearInterval(countdownTimer);
          console.log('Countdown finished, calling getNewWords');
          setTimeout(() => {
            getNewWords();
            setCountdown(null);
          }, 100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleNext = () => {
    console.log('Next button clicked');
    getNewWords();
    // Reset the timer
    startWordUpdateTimer();
  };

  const handleStop = () => {
    console.log('Stop button clicked');
    setStarted(false);
    setCountdown(null);
    setWords([]);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };


  console.log('Render - started:', started, 'countdown:', countdown, 'words:', words);


  return (
    <div className="container">
      <Head>
  <title>LearnRhyme</title>
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#ffffff" />
</Head>

      <h1 className="title">Learn Rhyme</h1>
      <p className="description">
        LearnRhyme helps you practice your improvisation skills.
        It gives you three words at a time which rhyme.
        Challenge yourself to create lines using these bars.
      </p>

      <main>
        <div className="frequency-control">
          <input
            type="range"
            min="2"
            max="10"
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value))}
            disabled={started}
          />
          <span className="frequency-value">{frequency} seconds</span>
        </div>
        {!started && (
  <div className="start-button-container">
    <button className="start-button" onClick={handleStart}>
      Start
    </button>
  </div>
)}
        {countdown !== null && <div className="countdown">{countdown}</div>}
        {started && countdown === null && words && words.length > 0 && (
          <>
            <div className="words">
              {words.map((word, index) => (
                <span key={index}>{word}</span>
              ))}
            </div>
            <div className="button-container">
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
              <button className="stop-button" onClick={handleStop}>
                Stop
              </button>
            </div>
          </>
        )}
      </main>

      <footer className="footer">
  Made with ❤️{' '}
  <a
    href="https://shivacodes.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="highlight"
  >
    @Shiva Bajpai
  </a>
</footer>


    <style jsx>{`
    .container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom right, rgb(219, 234, 254), rgb(249, 250, 251), rgb(252, 231, 243));
  color:rgb(0, 0, 0);
  padding: 80px;
}
      main {
        text-align: center;
        width: 100%;
        max-width: 600px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-size: 52px;
        margin-top: 20px;
        margin-bottom: 40px;
        font-weight: 600;
        font-family: 'serif';
        color:rgb(0, 0, 0);
      }

      .description {
          font-size: 20px;
          line-height: 1.5;
          font-family: 'serif';
          color:rgb(0, 0, 0);
          text-align: center;
          max-width: 600px;
          margin-bottom: 0;
        }

      .frequency-control {
        margin-bottom: 25px;
        display: flex;
        align-items: center;
      }
      .frequency-value {
        margin-left: 15px;
      }

        .button-container {
          display: flex;
         flex-direction: column;
          justify-content: center;
          gap: 20px;
          margin-top: 80px;
        }
            .start-button-container {
    margin-top: 100px; // Adjust this value to move the button up or down
    display: flex;
    justify-content: center;
  }

        .start-button, .next-button, .stop-button {
          font-size: 24px;
          padding: 15px 30px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
           .start-button {
          padding: 15px 90px;
           }

        .start-button, .next-button {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          background-size: 200% 200%;
          color: #ffffff;
          animation: gradientAnimation 5s ease infinite;
        }
        .stop-button {
          background-color: #808080;
          color: #ffffff;
        }
        .start-button:hover, .next-button:hover, .stop-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }
        .start-button:active, .next-button:active, .stop-button:active {
          transform: scale(0.95);
        }
        .next-button, .stop-button {
          font-size: 20px;
          padding: 20px 90px;
        }

      .countdown {
        font-size: 72px;
        font-weight: bold;
        animation: pulse 1s infinite;
      }
      .words {
        font-size: 48px;
        font-weight: bold;
      }
      .words span {
        margin: 0 10px;
        display: inline-block;
      }
      .footer {
        margin-top: 20px;
        font-size: 14px;
        color: #a0a0a0;
      }
      .highlight {
        color: #4ecdc4;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease;
      }
      .highlight:hover {
        color: #ff6b6b;
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @media (max-width: 600px) {
        .title {
          font-size: 18px;
        }

                  .description {
            font-size: 14px;
            padding: 0 20px;
          }

        .start-button, .next-button .stop-button{
          font-size: 20px;
          padding: 12px 90px;
        }
        .next-button .stop-button {
          font-size: 18px;
          margin-top: 1rem;
          padding: 8px 40px;
        }
        .countdown {
          font-size: 60px;
        }
        .words {
          font-size: 36px;
        }
        .footer {
          font-size: 12px;
        }
      }
    `}</style>

    <style jsx global>{`
      body {
        margin: 0;
        background-color:rgb(150, 56, 13);
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }
    `}</style>
  </div>
);
}