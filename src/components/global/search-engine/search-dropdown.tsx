// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ListFilter } from "lucide-react";

// export function FilterDropdown() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="p-0 h-0">
//           <ListFilter width={20} />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Filter by</DropdownMenuLabel>

//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>Amount</DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Less than 50,000</DropdownMenuItem>
//                 <DropdownMenuItem>50,001 to 150,000</DropdownMenuItem>
//                 <DropdownMenuItem>150,001 to 500,000</DropdownMenuItem>
//                 <DropdownMenuItem>500,001 to 1,000,000</DropdownMenuItem>
//                 <DropdownMenuItem>Above 1,000,000</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Pending</DropdownMenuItem>
//                 <DropdownMenuItem>Loading</DropdownMenuItem>
//                 <DropdownMenuItem>Transit</DropdownMenuItem>
//                 <DropdownMenuItem>Delivered</DropdownMenuItem>
//                 <DropdownMenuItem>Return</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>Product</DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Ago</DropdownMenuItem>
//                 <DropdownMenuItem>Pms</DropdownMenuItem>
//                 <DropdownMenuItem>Both</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>

//           <DropdownMenuItem>
//             Settings
//             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             Keyboard shortcuts
//             <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>Team</DropdownMenuItem>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Email</DropdownMenuItem>
//                 <DropdownMenuItem>Message</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>More...</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>
//           <DropdownMenuItem>
//             New Team
//             <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>GitHub</DropdownMenuItem>
//         <DropdownMenuItem>Support</DropdownMenuItem>
//         <DropdownMenuItem disabled>API</DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//           Log out
//           <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
