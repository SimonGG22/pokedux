export const bgTypeColor = (type) => {
    switch (type) {
      case 'fire':
        return 'bg-red-400';
      case 'water':
        return 'bg-blue-400';
      case 'grass':
        return 'bg-green-400';
      case 'poison':
        return 'bg-purple-600';
      case 'flying':
        return 'bg-gray-300'
      case 'electric':
        return 'bg-yellow-400'
      case 'ground':
        return 'bg-[#7C4700]'
      default:
        return 'bg-zinc-400';
    }
}
  
export const typeTextColor = (type) => {
    switch (type) {
        case 'flying':
        return 'text-black'
        case 'fire':
        return 'text-red-800';
        case 'water':
        return 'text-blue-800';
        case 'grass':
        return 'text-green-800';
        case 'poison':
        return 'text-purple-950';
        case 'electric':
        return 'text-yellow-800';
        case 'ground':
        return 'text-[#2B1700]'
        default:
        return 'text-black';
    }
};