import React, { ReactNode, useCallback, useMemo } from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetScrollView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

const BottomSheetModalComponent = ({
  bottomSheetModalRef,
  Children,
  stickyHeader,
}: {
  bottomSheetModalRef: any;
  Children: ReactNode;
  stickyHeader?: any;
}) => {
  const snapPoints = useMemo(() => ['85%', '85%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const animationConfigs = useMemo(
    () => ({
      duration: 400, // Customize the duration for a slower animation
      Easing: (value: number) => value, // Customize the easing function if needed
    }),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      animationConfigs={animationConfigs}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={1}
          opacity={0.7} // Set the desired opacity for the dull effect
        />
      )}
    >
      <BottomSheetView>{stickyHeader && stickyHeader()}</BottomSheetView>
      <BottomSheetScrollView>{Children}</BottomSheetScrollView>
    </BottomSheetModal>
  );
};

export default BottomSheetModalComponent;
